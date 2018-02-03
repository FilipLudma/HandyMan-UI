import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ModalModule } from "ng2-modal";
import { IntroModule } from './components/intro/intro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AlertComponent } from '../app/components/user/alert/alert.component';
import { IntroComponent } from '../app/components/intro/intro.component';
import { LoginComponent } from '../app/components/user/login/login.component';
import { RegisterComponent } from '../app/components/user/register/register.component';
import { HeaderComponent } from '../app/shared/components/header/header.component';
import { HomeComponent } from 'app/components/home/home.component';
import { CustomComponent } from 'app/components/custom/custom.component';
import { ContactComponent } from 'app/components/contact/contact.component';
import { ServicesComponent } from 'app/components/services/services.component';
import { OurTeamComponent } from 'app/components/our-team/our-team.component';

import { CategoryService } from './services/category/category.service'
import { OrderObjectService } from './services/order/order-object.service'

import { AlertService, } from './services/common/alert.service';
import { AuthenticationService } from './services/common/authentication.service';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './services/common/auth.guard';
import { Config } from './services/config';
import { HeaderComponentModule } from 'app/shared/components/header/header.module';

import { GoogleLoginProvider } from "angular4-social-login";
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("108844314724-bl11t2jahg7tldukdc9t1plta8cln5ut.apps.googleusercontent.com")
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("Facebook-App-Id")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    // HeaderComponent,
    IntroComponent,
    HomeComponent,
    CustomComponent,
    ContactComponent,
    ServicesComponent,
    OurTeamComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IntroModule,
    Ng2PageScrollModule.forRoot(),
    ModalModule,
    BrowserAnimationsModule,
    HeaderComponentModule,
    routing,
    SocialLoginModule
  ],
  providers: [
    OrderObjectService,
    CategoryService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    Config,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
