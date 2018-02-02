import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Config } from '../config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: Config) { }

    login(emailAddress: string, password: string, rememberMe: boolean) {
        return this.http.post(this.config.apiBaseUrl + 'account/login', { email: emailAddress, password: password, rememberMe: false })
            .map((response: any) => {
                if (response._body === "true") {
                    localStorage.setItem('currentUser', emailAddress);
                    return response._body;
                }
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    register(model: any) {
        console.log(model)
        return this.http.post(this.config.apiBaseUrl + 'account/register', { email: model.emailAddress, password: model.password, confirmPassword: model.confirmPassword })
            .map((response: any) => {
                return JSON.parse(response._body);
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser')
    }
}
