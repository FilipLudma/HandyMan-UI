import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCategoryComponent } from './service-category.component';
import { ServiceCategoryWorkerComponent } from '../service-category-worker/service-category-worker.component';


const routes: Routes = [
    {
        path: '', component: ServiceCategoryComponent, children: [
            { path: 'prehladSluzieb', component: ServiceCategoryComponent },
            { path: 'pracant', component: ServiceCategoryWorkerComponent }]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);