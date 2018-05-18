import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
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
    private engineeringService: EngineerIncidentService,
    private actionSheetCtrl: ActionSheetController,

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

  openEngineerIncidentPage(index: number) {
    this.navCtrl.push('EngineerIncidentPage', { 'incident': this.incidents[index] });
  }

  onSort() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Sort By',
      buttons: [
        {
          text: this.selectedSegment==='fixed'?'Date & Time':'Distance',
          handler: () => {
            /** this event is being listened in complaint.ts, 1st parameter is for sort, 2nd is for filter*/
            // this.onSelect.emit({ sortName: 'title', filter: null });
          }
        },
        {
          text: this.selectedSegment==='fixed'?'Time to Install':'Average Time',
          handler: () => {
            //show further options of complaintCatgories
            // this.onSelect.emit({ sortName: 'category', filter: null });

          }
        },
        {
          text: 'Category',
          handler: () => {
            // this.onSelect.emit({ sortName: 'status', filter: null });

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    actionSheet.present();
  }

}
