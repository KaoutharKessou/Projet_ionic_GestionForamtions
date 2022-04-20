import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormIncriptionPage } from './form-incription.page';

const routes: Routes = [
  {
    path: '',
    component: FormIncriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormIncriptionPageRoutingModule {}
