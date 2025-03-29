import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleParkingPage } from './detalle-parking.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleParkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleParkingPageRoutingModule {}
