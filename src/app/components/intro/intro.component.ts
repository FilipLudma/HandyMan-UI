import { ModalModule } from 'ng2-modal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: [
    './intro.component.css',
    '../../shared/css/font.family.css'
  ],
  providers: [ModalModule]
})

export class IntroComponent implements OnInit {

  constructor(public router: Router) { }

  login(){
    this.router.navigate(['/prihlasenie']);
  }
  
  ngOnInit() {
  }
}


