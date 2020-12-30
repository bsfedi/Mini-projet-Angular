import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from 'src/app/patient.service';
import {Patient} from 'src/app/model/patient.model';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: [
  ]
})
export class UpdatePatientComponent implements OnInit {
  currentPatient = new Patient ();
  constructor(private activatedRoute : ActivatedRoute ,
     private patientService :PatientService,
       private router :Router
      ) {   }
ngOnInit() : void{

  this.patientService.consulterPatient(this.activatedRoute.snapshot.params.id).subscribe( pat=>{this.currentPatient=pat ;});
  console.log(this.currentPatient); 
  }
  updatePatient() {
    this.patientService.updatePatient(this.currentPatient).subscribe(pat => {
    this.router.navigate(['patients']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }


}
