import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';

import { ModalModule } from "ng2-modal";
import { routing } from './new-order.routing';

import { NewOrderComponent } from './new-order.component';
import { AddressModule } from '../address/address.module'
import { DescriptionModule } from '../description/description.module'
import { ContactDetailsModule } from '../contact-details/contact-details.module'

import { HeaderComponentModule } from '../../shared/components/header/header.module';
import { FooterComponentModule } from '../../shared/components/footer/footer.module';

@NgModule({
  imports: [ 
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    ModalModule,
    AddressModule,
    DescriptionModule,
    ContactDetailsModule,
    HeaderComponentModule,
    FooterComponentModule,
    routing ],
  declarations: [ 
     NewOrderComponent,
     ],
  providers: []
})
export class NewOrderModule {}
 