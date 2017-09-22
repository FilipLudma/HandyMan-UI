import { LoginComponent } from './../security/login/login/login.component';
import { ModalModule } from 'ng2-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  providers: [ModalModule]
})
export class IntroComponent implements OnInit {

  test: LoginComponent;
  constructor(public modal: ModalModule) { }

  showLoginModal() {
    console.log('showLoginModal');
    this.test.open();
  }

  doSmth(reachedTarget: boolean): void {
    if (reachedTarget) {
    } else {
    }
  }

  ngOnInit() {
  }
}


