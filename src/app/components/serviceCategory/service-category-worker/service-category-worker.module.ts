import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module'
import { PopoverModule } from 'ng2-pop-over';
import { RatingModule } from "ng2-rating";
import { ModalModule } from "ng2-modal";

import { ServiceCategoryWorkerComponent } from './service-category-worker.component';
import { LightBoxComponent } from './../../../shared/components/light-box/light-box.component';
import { LightBoxModule } from '../../../shared/components/light-box/light-box.module';

@NgModule({
  imports: [
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    PopoverModule,
    LightBoxModule,
    RatingModule
  ],
  declarations: [
    ServiceCategoryWorkerComponent
  ],
  providers: []
})
export class ServiceCategoryWorkerModule { }
