import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

import { DivFlipComponent } from './div-flip.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ DivFlipComponent ],
  exports: [ DivFlipComponent ]
})
export class DivFlipModule { }
