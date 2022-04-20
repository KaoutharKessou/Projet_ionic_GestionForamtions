import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapMyInscriptionsPage } from './recap-my-inscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: RecapMyInscriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapMyInscriptionsPageRoutingModule {}
