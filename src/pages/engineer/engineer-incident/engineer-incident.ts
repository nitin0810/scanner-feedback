import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-engineer-incident',
  templateUrl: 'engineer-incident.html',
})
export class EngineerIncidentPage {

  incident: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    this.incident = this.navParams.get('incident');
  }

}
