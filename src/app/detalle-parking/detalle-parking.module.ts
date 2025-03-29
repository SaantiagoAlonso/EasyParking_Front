import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleParkingPageRoutingModule } from './detalle-parking-routing.module';

import { DetalleParkingPage } from './detalle-parking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleParkingPageRoutingModule
  ],
  declarations: [DetalleParkingPage]
})
export class DetalleParkingPageModule {}
