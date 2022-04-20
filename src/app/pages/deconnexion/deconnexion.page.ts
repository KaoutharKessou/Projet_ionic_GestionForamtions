import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Folder_auth/authentification-service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.page.html',
  styleUrls: ['./deconnexion.page.scss'],
})
export class DeconnexionPage implements OnInit {

  
  constructor(  public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
