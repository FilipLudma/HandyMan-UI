import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from "ng2-modal";

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
  ],
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ]
})
export class FooterComponentModule { }
