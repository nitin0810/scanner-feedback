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

  categories=['Installation','Servicing','Water Test','AMC'];
  subCategories=['Power Control','Dust Bag Indicator'];
  products=['Dr. Aquaguard Magna NXT HD RO','Euro Health Clean','Dr. Aeroguard SCPR 300','Eurovigil I Deter 100'];

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
