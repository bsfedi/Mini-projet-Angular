import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router'; 
import { RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  newPatient= new Patient();
  constructor(private patientService : PatientService, private router:Router) { }

  ngOnInit(): void {
  }
  addPatient(){
    this.patientService.ajouterPatient(this.newPatient)
    .subscribe(pat => {
    console.log(pat);
    });
    this.router.navigate(['patients']);
  }

}
