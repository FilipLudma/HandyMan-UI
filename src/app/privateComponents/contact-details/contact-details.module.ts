import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from '../new-order/new-order.routing';

import { AuthService } from '../../components/security/auth.service';
import { SharedModule } from '../../shared/shared.module'

import { ModalModule } from "ng2-modal";

import { ContactDetailsComponent } from './contact-details.component';

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
    ContactDetailsComponent,
  ],
  providers: []
})
export class ContactDetailsModule { }
