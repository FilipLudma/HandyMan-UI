import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from "ng2-modal";

import { PortfolioComponent } from './portfolio.component';
import { CarouselComponentModule } from '../../shared/components/carousel/carousel.model';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselComponentModule
  ],
  declarations: [ PortfolioComponent ],
  exports: [ PortfolioComponent ]
})
export class PortfolioModule { }
