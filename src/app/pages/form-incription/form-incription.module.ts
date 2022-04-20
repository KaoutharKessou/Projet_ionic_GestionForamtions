import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormIncriptionPageRoutingModule } from './form-incription-routing.module';
import { FormIncriptionPage } from './form-incription.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormIncriptionPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FormIncriptionPage]
})
export class FormIncriptionPageModule {}
