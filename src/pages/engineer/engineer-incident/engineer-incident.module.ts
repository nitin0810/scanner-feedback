import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EngineerIncidentPage } from './engineer-incident';

@NgModule({
  declarations: [
    EngineerIncidentPage,
  ],
  imports: [
    IonicPageModule.forChild(EngineerIncidentPage),
  ],
})
export class EngineerIncidentPageModule {}
