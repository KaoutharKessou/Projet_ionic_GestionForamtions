import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(  public authService: AuthenticationService,
    public router: Router ) { }

  ngOnInit() {}

  //methode du connxion avec email et paasword
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isLoggedIn) {
          this.router.navigate(['formations']);          
        } else {
          window.alert('Email invalide')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
