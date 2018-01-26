import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/components/user/login/login.component';
import { RegisterComponent } from '../app/components/user/register/register.component';
import { HomeComponent } from 'app/components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/uvod', pathMatch: 'full' },
  { path: 'uvod', component: HomeComponent },
  { path: 'prehladslužieb', loadChildren: 'app/components/serviceCategory/service-category/service-category.module#ServiceCategoryModule' },
  { path: 'prehlad', loadChildren: 'app/privateComponents/landing/landing.module#LandingModule' },
  { path: 'novaPorucha', loadChildren: 'app/privateComponents/new-order/new-order.module#NewOrderModule' },
  { path: 'historiaPoruch', loadChildren: 'app/privateComponents/orders/orders.module#OrdersModule' },
  { path: 'prihlasenie', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent },

  //   { path: 'orders', loadChildren: 'app/privateComponents/orders/orders.module#OrdersModule', canActivate: [AuthGuard] }, 
  //   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  //   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

