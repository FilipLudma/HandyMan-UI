import { Component, HostListener, Inject, OnInit, style, animate, transition, trigger, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { User } from 'app/models/user/user';
import { Router, ActivatedRoute } from '@angular/router';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../../css/style.default.css',
    '../../css/font.family.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(350, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, DoCheck {
  public navIsFixed: boolean = true;
  public emailAddress: String = "";
  public currentUser: any = localStorage.currentUser;

  @Input()
  navIsVisible: boolean = false;

  @Input()
  isPrivate: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document) {

  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/prihlasenie');
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number = window.scrollY;
    let isMainPage = this.document.getElementById('text');
    if (isMainPage) {
      let firstSectionOffset = isMainPage.offsetHeight - 240;
      if (firstSectionOffset) {
        if (number > firstSectionOffset) {
          this.navIsVisible = true;
        } else if (this.navIsVisible && number < firstSectionOffset) {
          this.navIsVisible = false;
        }
      }
    }
  }

  ngOnInit() {
    if (this.document.getElementById('text') == null) {
      this.navIsVisible = true;
    }
  }

  ngDoCheck() {
    if (this.route.component['name'] === "NewOrderComponent") {
      this.navIsFixed = false;
    }

    if (!!this.currentUser) {
      try {
        var temp = JSON.parse(localStorage.currentUser);
        if (this.route.component['name'] === "NewOrderComponent" && !!temp.token) {
          this.isPrivate = false;
        }
      }
      catch (error) {
        console.log('PROBLEM WITH HEADER JSON')
      }
    }
  }
}
