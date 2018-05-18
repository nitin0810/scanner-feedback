import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';


@IonicPage()
@Component({
  selector: 'page-fix-product',
  templateUrl: 'fix-product.html',
})
// THIS COMPONENT(PAGE) IS COMMON FOR FIXED AND NOT FIXED BUTTONS
export class FixProductPage {

  isFixed = true; //specifies which option is being used  

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions={ 
    'minWidth': 2,
    'canvasWidth': 600,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
  signature:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customService: CustomService
  ) {
  }

  ionViewDidLoad() {
    this.isFixed = this.navParams.get('isFixed');
  }

  clearPad(){
    this.signaturePad.clear();

  }
  
  savePad(){
    this.signature = this.signaturePad.toDataURL();
 
  }
  onSubmit() {
    this.customService.showToast('Submitted successfully');
    this.navCtrl.pop();
  }

}
