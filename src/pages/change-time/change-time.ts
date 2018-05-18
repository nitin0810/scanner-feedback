import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';

@IonicPage()
@Component({
  selector: 'page-change-time',
  templateUrl: 'change-time.html',
})
export class ChangeTimePage {

  constructor(
    private customService: CustomService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeTimePage');
  }

  onChangeTime() {
    this.customService.showToast('Time changed successfully');
    this.navCtrl.pop();
  }

}   
