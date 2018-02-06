import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../services/common/alert.service';
import { AuthenticationService } from '../../../services/common/authentication.service';
import { Config } from '../../../services/config';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    './ext-css/main.css',
    './ext-css/util.css'
  ],
  providers: [AuthenticationService, AlertService]
})
export class LoginComponent implements OnInit {
  public model: any = {};
  public loading = false;
  public returnUrl: string;

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.emailAddress, this.model.password, this.model.rememberMe).then(
      data => {
        if (data) {
          this.router.navigate([this.returnUrl]);
        }
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
  }

  signInWithGoogle(): void {
    this.loading = true;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        console.log("RETURN URL::", data);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
