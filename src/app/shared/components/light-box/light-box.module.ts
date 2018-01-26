import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LightBoxComponent } from '../light-box/light-box.component';
import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule
  ],
  declarations: [
    LightBoxComponent
  ],
  exports: [LightBoxComponent]
})
export class LightBoxModule { }
