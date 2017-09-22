import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent }       from './orders.component';

const routes: Routes = [
  { path: '',
    component: OrdersComponent,
    children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

