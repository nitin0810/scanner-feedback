import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncidentService } from '../../providers/incidents.service';


@IonicPage()
@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.html',
})
export class IncidentsPage {

  incidents: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private incidentService: IncidentService) {
  }

  ionViewDidLoad() {
    this.incidents = this.incidentService.getIncidents();
  }
  
  openIncidentDetailPage(index: number) {
    this.navCtrl.push('IncidentPage', { 'incident': this.incidents[index] });
  }

}
