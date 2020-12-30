import { Component, OnInit } from '@angular/core';
import {Patient} from 'src/app/model/patient.model';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients : Patient[];
  constructor(private patientService : PatientService,private router:Router) { 
  // this.patients=patientService.listePatients();
  }

  ngOnInit(): void {
    this.patientService.listePatients().subscribe(pats=>{
      console.log(pats);
      this.patients =pats ;
    })
  }
supprimerPatient(p: Patient)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.patientService.supprimerPatient(p.idPatientt).subscribe(()=>{
  console.log("Patient supprimé");
});
this.router.navigate(['patients']).then(()=>{
  window.location.reload();
})
}

}
