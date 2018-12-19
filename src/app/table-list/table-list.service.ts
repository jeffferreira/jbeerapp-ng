import { Observable } from 'rxjs';


import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Recipe } from 'app/shared/model/recipe/recipe';


const API = environment.ApiUrl;

@Injectable({ 
    providedIn: 'root' 
})
export class TableListService {

    private resourceUrl = API + '/recipes';

    constructor(
        private http: HttpClient
    ){}

    delete(recipe: Recipe): Observable<HttpResponse<any>>{
        return this.http.put<Recipe>(this.resourceUrl+'/excluir', recipe, { observe: 'response' });
    }
}