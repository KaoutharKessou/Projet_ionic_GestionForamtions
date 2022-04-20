import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
 
  {
    path: 'verification-email',
    loadChildren: () => import('./pages/verification-email/verification-email.module').then( m => m.VerificationEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'deconnexion',
    loadChildren: () => import('./pages/deconnexion/deconnexion.module').then( m => m.DeconnexionPageModule)
  },
  {
    //passer id formation en url pour la recuperer de firestore
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
   
  },
  {
    path: 'formations',
    loadChildren: () => import('./pages/formations/formations.module').then( m => m.FormationsPageModule)
  },
 
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'form-incription/:id',
    loadChildren: () => import('./pages/form-incription/form-incription.module').then( m => m.FormIncriptionPageModule)
  },
  {
    path: 'recap-my-inscriptions',
    loadChildren: () => import('./pages/recap-my-inscriptions/recap-my-inscriptions.module').then( m => m.RecapMyInscriptionsPageModule)
  },
  {
    path: 'recaputilatif/:id',
    loadChildren: () => import('./pages/recaputilatif/recaputilatif.module').then( m => m.RecaputilatifPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
