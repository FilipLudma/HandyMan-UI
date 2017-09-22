import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOrderComponent }       from './new-order.component';
import { AddressComponent } from '../address/address.component'
import { DescriptionComponent } from '../description/description.component'
import { ContactDetailsComponent } from '../contact-details/contact-details.component'


const routes: Routes = [
  { path: '', component: NewOrderComponent, 
    children: [
      { path: '', redirectTo: 'novaPorucha', pathMatch: 'full' },
      { path: 'novaPorucha', component: NewOrderComponent },
      { path: 'adresa', component: AddressComponent },
      { path: 'popis/:id', component: DescriptionComponent },
      { path: 'kontaktneInformacie/:id', component: ContactDetailsComponent }
    ] 
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

