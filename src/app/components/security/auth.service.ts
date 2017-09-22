import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt'
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
//   private serverUrl = 'http://52.215.88.161/api/';
  private serverUrl = 'http://localhost:5000/';
  
  
  private loginUrl = this. serverUrl + 'token';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http, private router: Router) {}

    loggedIn() {
        return tokenNotExpired(null, localStorage.getItem('access_token'));
    }

    logout() {
        localStorage.removeItem('access_token'); 
        this.router.navigateByUrl('/index')
    }

    login(credentials) {
        let body = new URLSearchParams();
        body.set('username', credentials.username);
        body.set('password', credentials.password);

        this.http.post(this.loginUrl, body)
        .map(res => res.json())
        .subscribe(
            // We're assuming the response will be an object with the JWT on an id_token key
            data => localStorage.setItem('access_token', data.access_token),
            error => console.log(error)
        );
    }
}