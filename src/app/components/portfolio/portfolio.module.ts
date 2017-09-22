import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from "ng2-modal";

import { PortfolioComponent } from './portfolio.component';
import { HomeModule } from '../home/home.module';
import { CarouselComponentModule } from '../../shared/components/carousel/carousel.model';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    CarouselComponentModule
  ],
  declarations: [ PortfolioComponent ],
  exports: [ PortfolioComponent ]
})
export class PortfolioModule { }
