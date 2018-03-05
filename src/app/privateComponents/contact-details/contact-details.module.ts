import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from '../new-order/new-order.routing';

import { SharedModule } from '../../shared/shared.module'
import { ModalModule } from "ng2-modal";
//import { DatepickerModule } from 'angular2-material-datepicker'
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { ContactDetailsComponent } from './contact-details.component';

@NgModule({
  imports: [
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    //DatepickerModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    routing
  ],
  declarations: [
    ContactDetailsComponent,
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'sk'},
  ],
})
export class ContactDetailsModule { }
