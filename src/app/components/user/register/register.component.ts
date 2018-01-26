import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../services/common/alert.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserService, AlertService],
  styleUrls: [
    './register.component.css',
    '../login/ext-css/main.css',
    '../login/ext-css/util.css']
})
export class RegisterComponent implements OnInit {
  public model: any = {};
  public loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .then(
      data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/prihlasenie']);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
  }
}
