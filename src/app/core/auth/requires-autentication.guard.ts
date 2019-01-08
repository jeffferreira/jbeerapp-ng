import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RequiresAutenticationGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router){

    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean>{
            if(this.userService.isLogged()){
                this.router.navigate(['dashboard']);
                return false;
            }
            return true;
    }

}