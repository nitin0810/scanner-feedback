import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsPage } from './products';
import { SortFilterOptionsModule } from '../sort-filter-options/sort-filter.module';

@NgModule({
  declarations: [
    ProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsPage),
    SortFilterOptionsModule
  ],
})
export class ProductsPageModule {}
