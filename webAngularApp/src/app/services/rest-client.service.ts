import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { ReturnModel } from '../models/returnModel';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient, private router: Router) { }

  public doGetNoAuth(urlApi: string): Observable<ReturnModel> {
    return this.http.get<ReturnModel>(environment.endpoint + urlApi, this.getHttpOptionNoAuth());
  }

  public doPostNoAuth(urlApi: string, dataRequest: any): Observable<ReturnModel> {
    return this.http.post<ReturnModel>(environment.endpoint + urlApi, JSON.stringify(dataRequest), this.getHttpOptionNoAuth());
  }

  public doGet(urlApi: string): Observable<ReturnModel> {
    return this.http.get<ReturnModel>(environment.endpoint + urlApi, this.getHttpOption())
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  public doPost(urlApi: string, dataRequest: any): Observable<ReturnModel> {
    return this.http.post<ReturnModel>(environment.endpoint + urlApi, JSON.stringify(dataRequest), this.getHttpOption())
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  public doPut(urlApi: string, dataRequest: any): Observable<ReturnModel> {
    return this.http.put<ReturnModel>(environment.endpoint + urlApi, JSON.stringify(dataRequest), this.getHttpOption())
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  public doDelete(urlApi: string): Observable<ReturnModel> {
    return this.http.delete<ReturnModel>(environment.endpoint + urlApi, this.getHttpOption())
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  public doGetDowload(urlApi: string): Observable<Blob> {
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Blob>(environment.endpoint + urlApi, { headers, });
  }

  errorHandler(error: any): void {
    console.log(error);
    localStorage.removeItem("token");
    this.router.navigate(["index"], { skipLocationChange: true });
  }

  public async downloadResource(urlApi: string): Promise<Blob> {
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token'));
    const file = await this.http.get<Blob>(environment.endpoint + urlApi,
      { headers, responseType: 'blob' as 'json' }).toPromise();
    return file;
  }

  private getHttpOption() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return httpOptions;
  }

  private getHttpOptionNoAuth() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return httpOptions;
  }

  /*
    private extractData(res: Response) {
      let body = res;
      return body || {};
    }
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
    */

}
