import { RequestInterceptor } from './auth/request.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng2Webstorage } from 'ngx-webstorage';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule, 
        RouterModule,
        HttpClientModule,
        Ng2Webstorage
    ],
    exports: [
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {

}