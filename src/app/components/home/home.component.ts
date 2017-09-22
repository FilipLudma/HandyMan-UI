import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../shared/css/style.default.css'
  ]
})

export class HomeComponent implements OnInit {
  public navIsFixed: boolean = false;

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    let navPosition = this.document.getElementById('header').offsetHeight - 1;
    if (number >= navPosition) {
      // console.log('number', number)
      // console.log('navPosition', navPosition)
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < navPosition) {
      this.navIsFixed = false;
    }
  }
}

