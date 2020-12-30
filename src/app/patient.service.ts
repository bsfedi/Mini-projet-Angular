import { Injectable } from '@angular/core';
import { Patient } from './model/patient.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  @Injectable({
    providedIn: 'root'
  })
export class PatientService {
  apiURL: string = 'http://localhost:8080/patients/api';
  patients : Patient[];
  patient : Patient ;
   constructor(private http:HttpClient) { 
    // this.patients=[{
    //   idPatient : 1,nom:"Ben salah",prenom:"Ali",dateCreation: new Date("01/14/2020"),heure:"15:00"},
    //   {idPatient : 2,nom:"Ben Med",prenom:"Salah",dateCreation: new Date("02/14/2020"),heure:"13:00"},
    //   {idPatient : 3,nom:"mejri",prenom:"mohamed",dateCreation: new Date("03/14/2020"),heure:"12:00"}
    // ];
  }
  listePatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.apiURL);
  }
  ajouterPatient ( pat:Patient):Observable<Patient>{
    return this.http.post<Patient>(this.apiURL,pat,httpOptions);
   }
  supprimerPatient(id : number){
    const url =`${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions);}
  //   const index = this.patients.indexOf(pat, 0);
  //   if (index > -1) {
  //   this.patients.splice(index, 1);
  //   }
  //   //ou Bien
  //   /* this.produits.forEach((cur, index) => {
  //   if(prod.idProduit === cur.idProduit) {
  //   this.produits.splice(index, 1);
  //   }
  //   }); */
  //   }
  consulterPatient(id: number): Observable<Patient> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Patient>(url);
    }
    
    updatePatient(pat :Patient):Observable<Patient>{
      return this.http.put<Patient>(this.apiURL,pat,httpOptions);
    }
    
}