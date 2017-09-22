import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module'
import { ServiceCategoryHowItWorksComponent } from './service-category-how-it-works.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ServiceCategoryHowItWorksComponent],
  exports: [ServiceCategoryHowItWorksComponent]
})
export class ServiceCategoryHowItWorksModule { }
