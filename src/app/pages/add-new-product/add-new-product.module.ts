import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewProductPageRoutingModule } from './add-new-product-routing.module';

import { AddNewProductPage } from './add-new-product.page';
import { FileSizeFormatPipe } from './file-size-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewProductPageRoutingModule
  ],
  declarations: [AddNewProductPage, FileSizeFormatPipe]
})
export class AddNewProductPageModule {}
