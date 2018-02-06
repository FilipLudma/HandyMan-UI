import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Config } from '../config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: Config) { }

    login(emailAddress: string, password: string, rememberMe: boolean) {
        return this.http.post(this.config.UserUrl + 'user/authenticate', { email: emailAddress, password: password, rememberMe: false })
            .map((response: any) => {
                if (!!response) {
                    localStorage.setItem('currentUser', response);
                    return true;
                }
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    register(model: any) {
        return this.http.post(this.config.UserUrl + 'account/register', { email: model.emailAddress, password: model.password, confirmPassword: model.confirmPassword })
            .map((response: any) => {
                return JSON.parse(response._body);
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    loggedin() {
        return this.http.get(this.config.apiBaseUrl + 'account/loggedin')
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
}
