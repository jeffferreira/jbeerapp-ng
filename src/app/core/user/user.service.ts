import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    settingsAccount: any;

    constructor(private authService: AuthService, private http: HttpClient){}

    setToken(token: string){
        this.authService.storeAuthenticationToken(token, false);
    }

    logout(){
        this.authService.logout();
    }

    isLogged(){
        return this.authService && this.authService.hasToken();
    }

}