import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login: LoginModel = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  public executeLogin() {
    this.loginService.executeLogin(this.login);
  }

}
