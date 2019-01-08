import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from 'environments/environment';


const API = environment.ApiUrl;

@Injectable()
export class UploadFileService {

  public resourceUrl = API + '/recipes/uploadrecipe';
  
  constructor(private http: HttpClient) {}
  
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', `${this.resourceUrl}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }
}