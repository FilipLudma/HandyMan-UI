import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/components/security/auth-guard.service'

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/components/security/login/login/login.module#LoginModule' },
  { path: 'prehladSluzieb', loadChildren: 'app/components/serviceCategory/service-category/service-category.module#ServiceCategoryModule' },

  { path: 'prehlad', loadChildren: 'app/privateComponents/landing/landing.module#LandingModule', canActivate: [AuthGuard] },
  { path: 'novaPorucha', loadChildren: 'app/privateComponents/new-order/new-order.module#NewOrderModule'},
  { path: 'historiaPoruch', loadChildren: 'app/privateComponents/orders/orders.module#OrdersModule', canActivate: [AuthGuard] },

  //   { path: 'orders', loadChildren: 'app/privateComponents/orders/orders.module#OrdersModule', canActivate: [AuthGuard] }, 
  //   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  //   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

