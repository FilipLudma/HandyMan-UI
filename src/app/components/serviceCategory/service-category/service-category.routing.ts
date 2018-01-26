import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCategoryComponent } from './service-category.component';
import { ServiceCategoryWorkerComponent } from '../service-category-worker/service-category-worker.component';


const routes: Routes = [
    {
        path: '', component: ServiceCategoryComponent, children: [
            { path: 'prehladslužieb', component: ServiceCategoryComponent },
            { path: 'opraváreň', component: ServiceCategoryWorkerComponent },
            { path: 'nábytkáreň', component: ServiceCategoryWorkerComponent },
            { path: 'záhradkáreň', component: ServiceCategoryWorkerComponent },
            { path: 'bezdrotáreň', component: ServiceCategoryWorkerComponent },
            { path: 'sťahováreň', component: ServiceCategoryWorkerComponent },
            { path: 'čistiareň', component: ServiceCategoryWorkerComponent },
            { path: 'pomôckáreň', component: ServiceCategoryWorkerComponent }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);