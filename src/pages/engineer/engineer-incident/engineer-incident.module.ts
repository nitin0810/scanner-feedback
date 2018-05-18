import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EngineerIncidentPage } from './engineer-incident';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    EngineerIncidentPage,
  ],
  imports: [
    IonicPageModule.forChild(EngineerIncidentPage),
    Ionic2RatingModule
  ],
})
export class EngineerIncidentPageModule {}
