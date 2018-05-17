import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EngineerIncidentService } from '../../../providers/engineer.service';



@IonicPage()
@Component({
  selector: 'page-engineer-incidents',
  templateUrl: 'engineer-incidents.html',
})
export class EngineerIncidentsPage {

  incidents: Array<any>;
  selectedSegment = 'assigned';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private engineeringService: EngineerIncidentService
  ) {
  }

  ionViewDidLoad() {
    this.incidents = this.engineeringService.getIncidentsOfEngineers().assigned;
  }

  onSegmentChange() {

    switch (this.selectedSegment) {
      case 'assigned': this.incidents = this.engineeringService.getIncidentsOfEngineers().assigned;
        break;
      case 'scheduled': this.incidents = this.engineeringService.getIncidentsOfEngineers().scheduled;
        break;
      case 'fixed': this.incidents = this.engineeringService.getIncidentsOfEngineers().fixed;
        break;
    }

  }

  openEngineerIncidentPage(index:number){
    this.navCtrl.push('EngineerIncidentPage',{'incident':this.incidents[index]});
  }

}
