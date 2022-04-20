import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../services/data/firestore.service';
import { Inscription } from 'src/app/models/Inscription';
import { Formation } from 'src/app/models/Formation';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-recap-my-inscriptions',
  templateUrl: './recap-my-inscriptions.page.html',
  styleUrls: ['./recap-my-inscriptions.page.scss'],
})
export class RecapMyInscriptionsPage implements OnInit {

  user: any;
  userId: string;

  public inscriptions: Observable<Inscription[]>;
  inscriptionssCol: AngularFirestoreCollection<Inscription>;
  constructor( private firestoreService: FirestoreService,
    public firestore: AngularFirestore ,
    private ngFireAuth: AngularFireAuth) { }

  async ngOnInit() {

    this.userId =  (await this.ngFireAuth.currentUser).uid;

    console.log("kaouthar", this.userId);
    this.firestore
    .collection('users')
    .doc(this.userId)
    .collection('inscriptions')
    .get()
    .subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    });
    
    const foramtions: AngularFirestoreCollection<Formation> = this.firestore.collection('users/', ref => ref.where('uid', '==',this.userId)).doc(this.userId).collection("inscriptions");
  }

}

