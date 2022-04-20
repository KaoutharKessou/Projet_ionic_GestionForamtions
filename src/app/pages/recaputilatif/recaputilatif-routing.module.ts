import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecaputilatifPage } from './recaputilatif.page';

const routes: Routes = [
  {
    path: '',
    component: RecaputilatifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecaputilatifPageRoutingModule {}
