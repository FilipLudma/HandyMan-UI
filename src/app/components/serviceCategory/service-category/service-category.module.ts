import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from "ng2-modal";

import { routing } from './service-category.routing';
import { ServiceCategoryComponent } from './service-category.component';

import { HeaderComponentModule } from '../../../shared/components/header/header.module';
import { FooterComponentModule } from '../../../shared/components/footer/footer.module';
import { ServiceCategoryWorkerModule } from '../service-category-worker/service-category-worker.module';
import { HeaderComponent } from 'app/shared/components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ModalModule,
        HeaderComponentModule,
        FooterComponentModule,
        ServiceCategoryWorkerModule,
        routing
    ],
    declarations: [
        ServiceCategoryComponent,
    ]
})
export class ServiceCategoryModule { }