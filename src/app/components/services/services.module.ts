import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from "ng2-modal";
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { ServicesComponent } from './services.component';
import { DivFlipModule } from '../../shared/components/div-flip/div-flip.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    CarouselModule,
    DivFlipModule,
  ],
  declarations: [],
  exports: []
})

export class ServicesModule { }