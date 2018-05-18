import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';


@IonicPage()
@Component({
  selector: 'page-fix-product',
  templateUrl: 'fix-product.html',
})
// THIS COMPONENT(PAGE) IS COMMON FOR FIXED AND NOT FIXED BUTTONS
export class FixProductPage {

  isFixed = true; //specifies which option is being used  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customService: CustomService
  ) {
  }

  ionViewDidLoad() {
    this.isFixed = this.navParams.get('isFixed');
  }

  onSubmit() {
    this.customService.showToast('Submitted successfully');
    this.navCtrl.pop();
  }

}
