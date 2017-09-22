import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../components/security/auth.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.css',
    '../../shared/css/style.default.css'
      ],
  providers:[ AuthService ]
})
export class LandingComponent implements OnInit {

  constructor(private auth: AuthService) { }

  logOut(){
    this.auth.logout();
  }

  ngOnInit() {
  }

}
