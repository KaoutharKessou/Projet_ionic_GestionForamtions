import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service';
import { Formation } from '../../models/Formation';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public formation: Formation;

  //importer le service 
  constructor(  private firestoreService: FirestoreService,
    private chemin : ActivatedRoute,
    public authService: AuthenticationService,) { }

  ngOnInit() {

    //fonction qui permet de recuperer detail en se basant sur ID envoyer à la page detail
    const formationId: string = this.chemin.snapshot.paramMap.get('id');
    this.firestoreService.formationDetail(formationId).subscribe(formation => {
      this.formation = formation;
    });

  }


}
