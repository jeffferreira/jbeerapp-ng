import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
            if(this.authService && this.authService.hasToken()){
                const token = this.authService.getToken();
                
                req = req.clone({
                    setHeaders: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            }
            return next.handle(req);
    }

}