import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser  } from "angular4-social-login";

@Component({
  selector: 'social-login',
  templateUrl: './social-login.component.html',
  styleUrls: [
    './social-login.component.css',
  ],
})
export class SocialLoginComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  
  constructor(private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}
