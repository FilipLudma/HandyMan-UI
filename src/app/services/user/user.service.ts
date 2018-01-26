import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Config } from '../config';
import { User } from '../../models/user/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: Config) { }

    getAll() {
        return this.http.get(this.config.UserUrl + '/users', this.jwt())
            .map(response => {
                return response.json() || { success: false, message: "No response from server" };
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    getById(_id: string) {
        return this.http.get(this.config.UserUrl + '/users/' + _id, this.jwt())
            .map(response => {
                return response.json() || { success: false, message: "No response from server" };
            }).catch((error: Response | any) => {
                return Observable.throw(error.json());
            }).toPromise();
    }

    create(user: User) {
        return this.http.post(this.config.UserUrl + '/users/register', user, this.jwt())
            .toPromise();
    }

    update(user: User) {
        return this.http.put(this.config.UserUrl + '/users/' + user._id, user, this.jwt())
            .toPromise();
    }

    delete(_id: string) {
        return this.http.delete(this.config.UserUrl + '/users/' + _id, this.jwt())
            .toPromise();
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}