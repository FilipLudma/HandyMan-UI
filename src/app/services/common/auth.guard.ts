import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "app/services/common/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this._authService.loggedin().then(response => {
            console.log('LOGGED IN RESPONSE', response);
        }).catch(error => {
            console.log("Got error:", error);
        });



        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }

        // not logged in so redirect to login page with the return url
        this._router.navigate(['/prihlasenie'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}