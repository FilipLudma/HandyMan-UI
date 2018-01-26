import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Config } from '../config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: Config) { }

    login(emailAddress: string, password: string) {
        return this.http.post(this.config.UserUrl + '/users/authenticate', { emailAddress: emailAddress, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser')
    }
}
