import { NgModule } from '@angular/core';

import { IntroComponent } from './intro.component';
import { HomeComponent } from '../home/home.component'
// import { routing } from './intro.routing';
import { SharedModule } from '../../shared/shared.module'
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { PortfolioModule } from '../portfolio/portfolio.module'
import { ServicesModule } from '../services/services.module'
import { ModalModule } from "ng2-modal";


import { AboutUsComponent } from '../about-us/about-us.component'
import { ServicesComponent } from '../services/services.component'
import { CustomComponent } from '../custom/custom.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    // routing,
    SharedModule,
    PortfolioModule,
    ServicesModule,
    ModalModule,
    Ng2PageScrollModule.forRoot()],
  declarations: [
    AboutUsComponent],
  providers: []
})
export class IntroModule { }