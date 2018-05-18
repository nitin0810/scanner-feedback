import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FixProductPage } from './fix-product';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    FixProductPage,
  ],
  imports: [
    IonicPageModule.forChild(FixProductPage),
    SignaturePadModule
  ],
})
export class FixProductPageModule {}
