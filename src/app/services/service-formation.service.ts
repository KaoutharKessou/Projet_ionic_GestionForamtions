import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Formation } from '../models/Formation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceFormationService {

  constructor(public firestore: AngularFirestore) { }

  //recuperer la liste des formations
  getFormationList(): Observable<Formation[]> {
    return this.firestore.collection<Formation>(`Formation`).valueChanges();
  }
}
