import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { IRecipe } from 'app/shared/model/recipe/recipe';

type EntityResponseType = HttpResponse<IRecipe>;
type EntityArrayResponseType = HttpResponse<IRecipe[]>;

const API = environment.ApiUrl;

@Injectable({ 
    providedIn: 'root' 
})
export class TableListService {

    public resourceUrl = API + '/recipes';

    constructor(
        private http: HttpClient
    ){}

    create(recipe: IRecipe): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(recipe);
        return this.http
            .post<IRecipe>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    findAll(): Observable<EntityArrayResponseType> {
        return this.http
            .get<IRecipe[]>(this.resourceUrl, { observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(recipe: IRecipe): IRecipe {
        const copy: IRecipe = Object.assign({}, recipe, {
            date: recipe.date != null && recipe.date.isValid() ? recipe.date.toJSON() : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.date = res.body.date != null ? moment(res.body.date) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((recipe: IRecipe) => {
                recipe.date = recipe.date != null ? moment(recipe.date) : null;
            });
        }
        return res;
    }
}