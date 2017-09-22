import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent, children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

