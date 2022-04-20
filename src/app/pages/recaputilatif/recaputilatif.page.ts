import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Inscription } from 'src/app/models/Inscription';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-recaputilatif',
  templateUrl: './recaputilatif.page.html',
  styleUrls: ['./recaputilatif.page.scss'],
})
export class RecaputilatifPage implements OnInit {

  inscription : Inscription;
  public inscriptionInfo: Observable<Inscription[]>;

  constructor(private firestoreService: FirestoreService,
    private route: ActivatedRoute) { }

  async ngOnInit() {


    //recuper id current inscription passer par url
    const inscriptionId: string = this.route.snapshot.paramMap.get('id');
    (await this.firestoreService.getInscriptionRecap(inscriptionId)).subscribe(inscription => {
      this.inscription = inscription;
    });
  }

}
