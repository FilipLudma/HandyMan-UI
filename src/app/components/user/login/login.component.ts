import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../services/common/alert.service';
import { AuthenticationService } from '../../../services/common/authentication.service';
import { Config } from '../../../services/config';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angular4-social-login";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private alertService: AlertService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/novaPorucha/adresa';

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.emailAddress, this.model.password, this.model.rememberMe).then(
      data => {
        if (!!data && !!data._body) {
          var response = JSON.parse(data._body);
          if (response.statusCode !== 401 && !!response.token) {
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.router.navigate([this.returnUrl]);
          } else if (response.statusCode === 401) {
            this.toastr.error('Nesprávne heslo alebo email!', 'Oops!');
          }
        }
      },
      error => {
        this.toastr.warning('Problém je na našej strane. Skúste sa prihlásiť znova.', 'Ospravedlňujeme sa');
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
