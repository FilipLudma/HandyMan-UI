import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { SharedModule } from '../../shared/shared.module'
import { routing } from './home.routing';

// import { HomeComponent } from './home.component';
// import { AboutUsComponent } from '../about-us/about-us.component'
// import { ServicesComponent } from '../services/services.component'
import { PortfolioModule } from '../portfolio/portfolio.module';
import { CarouselComponentModule } from '../../shared/components/carousel/carousel.model';
import { ServicesModule } from '../services/services.module';
// import { OurTeamComponent } from '../our-team/our-team.component';
// import { ContactComponent } from '../contact/contact.component';


@NgModule({
  imports: [ 
    Ng2PageScrollModule.forRoot(),
    SharedModule,
    PortfolioModule,
    ServicesModule,
    CarouselComponentModule,
    routing ],
  declarations: [ 
    // HomeComponent,
    // AboutUsComponent,
    // ServicesComponent,
    // PortfolioComponent,
    // CustomComponent,
    // OurTeamComponent,
    // ContactComponent
     ],
  providers: []
})
export class HomeModule {}
 