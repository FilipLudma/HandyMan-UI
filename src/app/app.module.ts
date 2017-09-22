import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ModalModule } from "ng2-modal";

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { IntroModule } from './components/intro/intro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AuthService } from '../app/components/security/auth.service';
import { AuthGuard } from '../app/components/security/auth-guard.service';
import { CategoryService } from './services/category/category.service'
import { OrderObjectService } from './services/order/order-object.service'
import { ServiceCategoryWorkerComponent } from '../app/components/serviceCategory/service-category-worker/service-category-worker.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IntroModule,
    Ng2PageScrollModule.forRoot(),
    ModalModule,
    BrowserAnimationsModule,
    //Angular2FontAwesomeModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    OrderObjectService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
