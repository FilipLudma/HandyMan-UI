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

  constructor(  ) { }

  ngOnInit() { }
}

