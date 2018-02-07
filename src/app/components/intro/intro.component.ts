import { ModalModule } from 'ng2-modal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: [
    './intro.component.css',
    '../../shared/css/font.family.css'
  ],
  providers: [ModalModule]
})

export class IntroComponent implements OnInit, DoCheck {
  public currentUser: any = localStorage.getItem('currentUser');
  public isLogged: any = false;

  constructor(public router: Router) { }

  login() {
    this.router.navigate(['/prihlasenie']);
  }

  checkIfLoggedIn() {
    if (!!this.currentUser) {
      try {
        var temp = JSON.parse(this.currentUser);
        if (!!temp.token) {
          this.isLogged = true;
        }
      }
      catch (error) {
        console.log("PROBLEM WITH JSON PARSE - INTRO")
      }
    }
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  ngDoCheck() {
    this.checkIfLoggedIn();
  }
}


