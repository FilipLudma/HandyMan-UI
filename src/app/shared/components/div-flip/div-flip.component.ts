import { Component, OnInit, Input } from '@angular/core';
import { animation } from './div-flip.animation';

import { Router } from '@angular/router';

@Component({
  selector: 'app-div-flip',
  templateUrl: './div-flip.component.html',
  styleUrls: ['./div-flip.component.css'],
  animations: [animation]
})
export class DivFlipComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() redirectUrl: string;

  public url: string;
  public flip: string = 'inactive';

  constructor(private router: Router) { }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  redirectToDetail() {
    this.router.navigateByUrl(this.redirectUrl);
  }

  ngOnInit() {
  }

}
