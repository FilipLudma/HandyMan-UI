import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { SharedModule } from '../../shared/shared.module'
import { CommonModule } from '@angular/common';
import { CarouselComponentModule } from '../../shared/components/carousel/carousel.model';
import { CarouselModule } from 'ng2-bootstrap/';

import { routing } from './orders.routing';

import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [ 
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    SharedModule,
    CarouselComponentModule,
    routing ],
  declarations: [ 
     OrdersComponent
     ],
  providers: []
})
export class OrdersModule {}
 