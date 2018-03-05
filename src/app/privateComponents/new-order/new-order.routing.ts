import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOrderComponent }       from './new-order.component';
import { AddressComponent } from '../address/address.component'
import { DescriptionComponent } from '../description/description.component'
import { ContactDetailsComponent } from '../contact-details/contact-details.component'
import { ConfirmationComponent } from '../confirmation/confirmation.component'
import { AuthGuard } from '../../services/common/auth.guard';

const routes: Routes = [
  { path: '', component: NewOrderComponent, 
  // { path: '', component: NewOrderComponent, 
    children: [
      { path: '', redirectTo: 'novaPorucha', pathMatch: 'full' },
      { path: 'novaPorucha', component: NewOrderComponent },
      { path: 'adresa', component: AddressComponent },
      { path: 'popis/:id', component: DescriptionComponent },
      { path: 'kontaktneInformacie/:id', component: ContactDetailsComponent },
      { path: 'potvrdenie/:id', component: ConfirmationComponent }
    ] 
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

