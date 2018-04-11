import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IType } from './typeprobleme';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TypeService {
  private baseUrl = 'api/type';

  constructor(private _http: HttpClient) { }

  obtenirType(): Observable<IType[]>{
    return this._http.get<IType[]>(this.baseUrl)
    .do(data => console.log('obtenirType: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.error);
    return Observable.throw(err.message);
  }
}
