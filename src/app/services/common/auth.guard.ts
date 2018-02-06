import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "app/services/common/authentication.service";
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        return this._authService.loggedin().then(response => {
            return true;
        }).catch(error => {
            //console.log("Got error:", error);
            this._router.navigate(['/prihlasenie'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    }
}