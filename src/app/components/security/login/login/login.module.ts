import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { ModalModule } from "ng2-modal";
import { routing } from './login.routing';
//import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { AuthService } from '../../auth.service';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
