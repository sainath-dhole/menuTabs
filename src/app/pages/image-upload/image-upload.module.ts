import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageUploadPageRoutingModule } from './image-upload-routing.module';

import { ImageUploadPage } from './image-upload.page';

import { FileSizeFormatPipe } from './file-size-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ImageUploadPageRoutingModule
  ],
  declarations: [ImageUploadPage,FileSizeFormatPipe]
})
export class ImageUploadPageModule {}
