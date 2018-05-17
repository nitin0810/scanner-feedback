import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EngineerIncidentsPage } from './engineer-incidents';

@NgModule({
  declarations: [
    EngineerIncidentsPage,
  ],
  imports: [
    IonicPageModule.forChild(EngineerIncidentsPage),
  ],
})
export class EngineerIncidentsPageModule {}
