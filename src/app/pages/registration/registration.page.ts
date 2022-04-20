import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service'; //service
import { User } from 'src/app/models/User';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>

  constructor( public authService: AuthenticationService,//injcetion
    public router: Router, private db: AngularFirestore,) {

      //traitement ajouter user à la collection users firestore 
      this.userCollection = db.collection<User> ('users');
      this.users = this.userCollection.snapshotChanges().pipe(
        map (actions => {
          return actions.map (a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ... data};
          })
        })
      )
    }
     


  ngOnInit() {}

  //methode craete count
  signUp(email, password){
    return new Promise<any>((resolve, reject) => 
    {

      console.log("kaoutahrrrrrrrrrrrrrrrrrrrr");
      this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        console.log("User apres inscription = "+res.user.uid);

      //***send email de verification apres registration pour confirmation */
       this.authService.SendVerificationMail()
       this.router.navigate(['verification-email']);
       
        let user: User = {
          uid: res.user.uid,
          email: res.user.email,
          name:'',
          emailVerified:true};

        
          //ajouter user à la collection user firestore
          this.userCollection.doc(res.user.uid).set(user);
         
          resolve(res);
        }, err => {
          reject(err);
        }
        )
      })
  }}
