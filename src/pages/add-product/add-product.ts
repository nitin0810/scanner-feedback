import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';



@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  brands = ['Samsung', 'Apple', 'HTC', 'Bajaj', 'LG'];
  categories = ['Home Appliance', 'Electrical', 'Smartphone & Tablets'];
  models = ['Iphone 6', 'Galaxy 7', 'Ceiling Fan 453', "32' LED TV"];

  //ngModal variables

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private customService: CustomService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onProductAdd() {
    this.customService.showToast('Product added successfully');
    this.dismiss();
  }

}
