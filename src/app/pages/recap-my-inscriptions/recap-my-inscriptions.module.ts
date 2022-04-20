import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapMyInscriptionsPageRoutingModule } from './recap-my-inscriptions-routing.module';

import { RecapMyInscriptionsPage } from './recap-my-inscriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapMyInscriptionsPageRoutingModule
  ],
  declarations: [RecapMyInscriptionsPage]
})
export class RecapMyInscriptionsPageModule {}
