import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../services/common/alert.service';
import { AuthenticationService } from '../../../services/common/authentication.service';
import { Config } from '../../../services/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, AlertService]
})
export class LoginComponent implements OnInit {
  public model: any = {};
  public loading = false;
  public returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.emailAddress, this.model.password)
      .then(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
  }
}
