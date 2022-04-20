import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../services/data/firestore.service';
import { Formation } from '../../models/Formation';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Inscription } from 'src/app/models/Inscription';
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  user: any;
  userId: string;
  public FormationList: Observable<Formation[]>;
  public FormationListCU: Observable<String[]>;
  
  constructor( private firestoreService: FirestoreService,
    public firestore: AngularFirestore ,
    private ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService) { }

  async ngOnInit() {

    //au chargement de la page la liste des foramtions est affiche
    this.FormationList = this.firestoreService.getFormationList();

    //recuperer la liste des formations de l'utilsateur courant 

    this.userId =  (await this.ngFireAuth.currentUser).uid;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .collection('inscriptions')
    .get()
    .subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().formationId);

       this.FormationListCU.subscribe(doc.data().formationId);

        
      });
    

    });

    
    

  }
  
  

  }
