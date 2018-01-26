import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from '../new-order/new-order.routing';

import { SharedModule } from '../../shared/shared.module'
import { ModalModule } from "ng2-modal";

import { AddressComponent } from './address.component';
import { OptionsComponent } from '../options/options.component';

@NgModule({
  imports: [
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    routing
  ],
  declarations: [
    AddressComponent,
  ],
  providers: []
})
export class AddressModule { }
