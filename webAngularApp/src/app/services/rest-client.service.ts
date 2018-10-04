import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

import { ReturnModel } from '../models/returnModel';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }

  public doGetNoAuth(urlApi: string): Observable<ReturnModel> {
    return this.http.get<ReturnModel>(environment.endpoint + urlApi, this.getHttpOptionNoAuth());
  }

  public doPostNoAuth(urlApi: string, dataRequest: any): Observable<ReturnModel> {
    return this.http.post<ReturnModel>(environment.endpoint + urlApi, JSON.stringify(dataRequest), this.getHttpOptionNoAuth());
  }

  public doGet(urlApi: string): Observable<ReturnModel> {
    return this.http.get<ReturnModel>(environment.endpoint + urlApi, this.getHttpOption());
  }

  public doPost(urlApi: string, dataRequest: any): Observable<ReturnModel> {
    return this.http.post<ReturnModel>(environment.endpoint + urlApi, JSON.stringify(dataRequest), this.getHttpOption());
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