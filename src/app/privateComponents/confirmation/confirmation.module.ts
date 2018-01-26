import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { routing } from '../new-order/new-order.routing';
import { SharedModule } from '../../shared/shared.module'
import { ModalModule } from "ng2-modal";
import { ImageUploadModule } from '../image-upload/image-upload.module';

import { ConfirmationComponent } from './confirmation.component';

@NgModule({
  imports: [
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule,
    ModalModule,
    routing
  ],
  declarations: [
    ConfirmationComponent
  ],
  providers: []
})
export class ConfirmationModule { }
