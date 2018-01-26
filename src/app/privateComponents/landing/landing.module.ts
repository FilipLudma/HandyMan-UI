import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CommonModule } from '@angular/common';
import { ModalModule } from "ng2-modal";
import { routing } from './landing.routing';

import { LandingComponent } from './landing.component';
import { OptionsComponent } from '../options/options.component';
import { HeaderComponentModule } from '../../shared/components/header/header.module';
import { FooterComponentModule } from '../../shared/components/footer/footer.module';


@NgModule({
  imports: [ 
    Ng2PageScrollModule.forRoot(),
    CommonModule,
    ModalModule,
    HeaderComponentModule,
    FooterComponentModule,
    routing ],
  declarations: [ 
     LandingComponent,
     OptionsComponent
     ],
  providers: []
})
export class LandingModule {}
 