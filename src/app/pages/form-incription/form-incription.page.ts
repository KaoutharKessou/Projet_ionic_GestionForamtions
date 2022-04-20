import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { Formation } from 'src/app/models/Formation';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-form-incription',
  templateUrl: './form-incription.page.html',
  styleUrls: ['./form-incription.page.scss'],
})
export class FormIncriptionPage implements OnInit {

  //creation d uen propriete pour la recuperation
  public formation: Formation;
  public ValidationFormation: FormGroup;
  public user:User;
  param: String;




  constructor(
    //definir alert de confirmation apres inscription
    public alertController: AlertController,
    private firestoreService: FirestoreService,
    private chemin : ActivatedRoute,
    public authService: AuthenticationService,
    private ngFireAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    form: FormBuilder,
    private router: Router,
    public firestore: AngularFirestore) {
      
      

       //required des champs saisies dans formInscriptio
       this.ValidationFormation = form.group({
        nom: ['', Validators.required],
        mail: ['', Validators.required],
        phone: ['', Validators.required],
        city: ['', Validators.required],
      });

  }


 ngOnInit() {
    
   
  }


  //fonction create collection inscriptions : contient inscription un user dans une inscription choisie

  
 
  async inscriptionFormation()
  {
    const loading = await this.loadingCtrl.create();

  const nom = this.ValidationFormation .value.nom;
  const mail = this.ValidationFormation .value.mail;
  const phone = this.ValidationFormation .value.phone;
  const city = this.ValidationFormation .value.city;

   //*********recuperer id currentFormation passer par URl : current formation 
   const formationId: string = this.chemin.snapshot.paramMap.get('id');

   //*********recuperer current id user

      const uid = (await this.ngFireAuth.currentUser).uid;


     
      const id = this.firestore.createId();
      return this.firestore.collection('users').doc(uid).collection('inscriptions').doc(id).set({
        formationId,
        uid,
        nom,
        mail,
        phone,
        city
      }).then(
    () => {
      loading.dismiss().then(() => {
      
        //alert de confirmation d 'inscription
        this.alertController.create({
          header: 'Alert',
          subHeader: 'Validation',
          message: 'Votre inscription est passé avec succés',
          buttons: [

            {  
              text: 'ok',  
              handler: data => {  
                this.router.navigate(["/recaputilatif", id]);
              }
            }
          ]
        }).then(res => {
    
      
          res.present();
       
    
        });
      });
    },
    error => {
      loading.dismiss().then(() => {
        console.error(error);
      });
    }
  )
 
     return await loading.present(); //load jusqu a remplir les donnes dans la DB 
     
   
  }



}
