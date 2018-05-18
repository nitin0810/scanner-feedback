import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddIncidentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-incident',
  templateUrl: 'add-incident.html',
})
export class AddIncidentPage {

  categories=['Display','Power Supply','Sound','Physical Damage'];
  subCategories=['Not Functioning Properly','Completely Damaged'];
  products=['LG 190 TV','Samsung S4 Mobile','LG MN190 Microwave Oven','Carrier 1.5 Ton Split AC'];

  fromFabBtn = false;// to decide if this page is opened through fab btn or incident -detail page
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  
  ) {
  }

  ionViewDidLoad() {
    this.fromFabBtn = this.navParams.get('fromFabBtn');
  }

}
