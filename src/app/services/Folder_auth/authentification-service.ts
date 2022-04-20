import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
  //********** Methodes ************/

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Register user with email/password/name
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

   // Return true if user login
   get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // send Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser
      .then((user) => {
        return user.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  //log-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}