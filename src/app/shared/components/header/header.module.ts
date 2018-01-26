import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { ModalModule } from "ng2-modal";

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderComponentModule { }
