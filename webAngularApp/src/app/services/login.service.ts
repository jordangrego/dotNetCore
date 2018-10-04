import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';

import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restClientService: RestClientService) { }

  public executeLogin(login: LoginModel) {
    this.restClientService.doPostNoAuth('token', login).subscribe(resp => {
      if (resp.success) {
        console.log('token: [' + resp.data.token + ']');
        localStorage.setItem('token', resp.data.token);
      } else {
        localStorage.removeItem('token');
      }

      return resp.success;
    });
  }

  public executeLogout() {
    localStorage.removeItem('token');
  }

}
