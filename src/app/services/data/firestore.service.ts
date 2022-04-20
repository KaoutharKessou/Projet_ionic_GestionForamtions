import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/collection/collection';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { Inscription } from 'src/app/models/Inscription';
import { User } from 'src/app/models/User';
import { Formation } from '../../models/Formation';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  
  public user:User;
  public inscription: Inscription;

  constructor(public firestore: AngularFirestore,
    private ngFireAuth: AngularFireAuth, private router: Router) { }

  //create formation document in  collection
  createFormation(
    title :string,
    description :string,
    prix: number
  ): Promise<void> { 

    const id = this.firestore.createId();

    return this.firestore.doc('Formations/' +id).set({
      id,
      title,
      description,
      prix,
    });
  }

 

  //afficher la liste des formations
  getFormationList(): Observable<Formation[]> { 
    return this.firestore.collection<Formation>('/Formations').valueChanges();
  }
  

  //recuper detail de la formation  en  utilisant id de la formation
  formationDetail(formationId: string): Observable<Formation> {
    return this.firestore.collection('Formations').doc<Formation>(formationId).valueChanges();


  }


   //********methode inscription 

  //recupertaion du current id user 

 /*inscriptionFormation(formationId:string, uid:string, nom:string, mail:string, phone:number, city:string) : Promise<void> {
    
    
    const id = this.firestore.createId();
    return this.firestore.collection('users').doc(uid).collection('inscriptions').doc(id).set({
      formationId,
      uid,
      nom,
      mail,
      phone,
      city
    })
    

    
   }*/
  
//******Afficher le recapitulatif de l inscription dans une formation pour validation */

 
  async getInscriptionRecap(inscriptionId: string): Promise<Observable<Inscription>>
{
  const uid = (await this.ngFireAuth.currentUser).uid;
  return this.firestore.collection('users').doc(uid).collection('inscriptions').doc<Inscription>(inscriptionId).valueChanges();
}




//*************Afficher juste la liste des foramtions dont user a fait l inscription */

async getcurrentuserId()
{
  const uidc = (await this.ngFireAuth.currentUser).uid;
  return uidc;
}
 getFormationInscription(): Observable<Inscription[]>
{
  
  //recuperer id du current user
   //const uidc =this.getcurrentuserId();

  let uidc=this.getcurrentuserId().then.toString;
  console.log("kaoutar",uidc);

  this.getcurrentuserId().then(data => {
  
    //this.uidc=data.toString;
  });



  //recuprer id user from Inscriptions users for comparaison
  const inscriptions: AngularFirestoreCollection<Inscription> = this.firestore.collection('Inscriptions/');
  
  
  
  
  
  // ref => ref.where('uid', '==',uidc));
   //const uid = this.firestore.collection<Inscription>(`Inscriptions`).valueChanges({uid:'uid'});
  

  //recuprer id formation from Inscriptions users for comparaison

    //recuprer id formation from collection Formations
 // const foramtions: AngularFirestoreCollection<Formation> = this.firestore.collection('Formations/', ref => ref.where('id', '==',inscriptions.ref.formationid));
  //tester la condition puis afficher
 
  return inscriptions.valueChanges();
  //return this.angularFirestore.collection("questions", ref => ref.where('categoryID', '==', id_here)).valueChanges();


}


 
}
