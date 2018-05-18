import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { CustomService } from '../../../providers/custom.service';



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
    private alertCtrl: AlertController,
    private customService:CustomService
  ) {
  }

  ionViewDidLoad() {
    this.incident = this.navParams.get('incident');
  }

  onSchedule() {
this.navCtrl.push('ChangeTimePage');
  }

  onReject() {

    const alert: Alert = this.alertCtrl.create({
      title: 'Reject Incident',
      subTitle: 'Please specify the reason',
      inputs: [{
        type: 'text'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Reject',
        handler: (data) => {
          console.log(data);
          this.customService.showToast('Complaint Rejected Successfully');
        }
      }]
    });
    alert.present();
  }

  onFixed() {
    this.navCtrl.push('FixProductPage',{'isFixed':true});
  }

  onNotFixed() {
    this.navCtrl.push('FixProductPage',{'isFixed':false});

  }
}
