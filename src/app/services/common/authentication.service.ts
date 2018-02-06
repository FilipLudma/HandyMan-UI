import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Config } from '../config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: Config) { }

    login(emailAddress: string, password: string, rememberMe: boolean) {
        return this.http.post(this.config.UserUrl + 'users/authenticate', { emailAddress: emailAddress, password: password, rememberMe: false })
            .map((response: any) => {
                return response;
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    register(model: any) {
        return this.http.post(this.config.UserUrl + 'users/register', { emailAddress: model.emailAddress, password: model.password })
            .map((response: any) => {
                return response;
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    loggedin() {
        return this.http.get(this.config.UserUrl + 'users/authenticated', this.jwt())
            .map((response: any) => {
                return response;
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser')
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
