import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { routing } from '../new-order/new-order.routing';

import { AuthService } from '../../components/security/auth.service';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { CarouselComponentModule } from '../../shared/components/carousel/carousel.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselComponentModule,
    routing
  ],
  declarations: [
    ImageUploadComponent,
    FileSelectDirective
  ],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule { }
