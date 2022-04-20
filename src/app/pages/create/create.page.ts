import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  createFormationForm: FormGroup;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
    ) {
      this.createFormationForm = formBuilder.group({
       title: ['', Validators.required],
        description: ['', Validators.required],
        prix: ['', Validators.required],
      });
    }
     

  ngOnInit() {
  }

  //fonction pour ajouter formation
  async createFormation() {
    const loading = await this.loadingCtrl.create();
  
    const title =this. createFormationForm.value.title;
    const description = this. createFormationForm.value.description;
    const prix = this. createFormationForm.value.prix;
   
    this.firestoreService.createFormation(title, description, prix)
    .then(
      () => {
    
        //load pendant l 'ajout à la DB
        loading.dismiss().then(() => {
          this.router.navigateByUrl('');
        
        });
      },
      error => {
        loading.dismiss().then(() => {
          console.error(error);
        });
      }
    );

    return await loading.present();
  

}
}
