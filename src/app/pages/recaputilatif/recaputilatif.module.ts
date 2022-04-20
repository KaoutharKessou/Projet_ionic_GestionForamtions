import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecaputilatifPageRoutingModule } from './recaputilatif-routing.module';

import { RecaputilatifPage } from './recaputilatif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecaputilatifPageRoutingModule
  ],
  declarations: [RecaputilatifPage]
})
export class RecaputilatifPageModule {}
