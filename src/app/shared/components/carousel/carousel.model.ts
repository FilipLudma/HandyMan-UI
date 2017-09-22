import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { ModalModule } from "ng2-modal";
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    CarouselModule,
  ],
  declarations: [ CarouselComponent ],
  exports: [ CarouselComponent ]
})
export class CarouselComponentModule { }
