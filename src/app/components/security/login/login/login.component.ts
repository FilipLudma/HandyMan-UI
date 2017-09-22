import { ModalModule } from 'ng2-modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

export interface Credentials {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthService
  ]
})

export class LoginComponent implements OnInit {
  credentials: Credentials;

  @ViewChild('loginModal') loginModal;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  checkIfloggedIn() {
    console.log('checkIfloggedIn');
    console.log(this.auth.loggedIn());

    if (this.auth.loggedIn()) {
      this.router.navigateByUrl('/prehlad');
      return true;
    } else {
      return false;
    }
  }

  open(){
    console.log('Login Component');
  }

  onLogin(model: Credentials, isValid: boolean) {
    console.log("loginOnSubmit");
    this.auth.login(model);
    var test = this.checkIfloggedIn();
  }

  ngOnInit() {
    console.log(this.loginModal);
    this.loginModal.open();

    // Default values for login form
    this.credentials = {
      username: '',
      password: ''
    }
  }
}
