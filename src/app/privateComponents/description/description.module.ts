import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { routing } from '../new-order/new-order.routing';

import { AuthService } from '../../components/security/auth.service';
import { SharedModule } from '../../shared/shared.module'
import { ModalModule } from "ng2-modal";
import { ImageUploadModule } from '../image-upload/image-upload.module';
import { AccordionModule } from "ng2-accordion";
import { UiSwitchModule } from '../../../../node_modules/angular2-ui-switch/src';

import { DescriptionComponent } from './description.component';
// import { ImgUploadComponent } from '../img-upload/img-upload.component';

@NgModule({
  imports: [
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule,
    ModalModule,
    UiSwitchModule,
    AccordionModule,
    routing
  ],
  declarations: [
    DescriptionComponent
  ],
  providers: []
})
export class DescriptionModule { }
