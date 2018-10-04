import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  login: LoginModel = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  public executeLogin() {
    this.loginService.executeLogin(this.login);
    this.router.navigate(['pessoa'], { skipLocationChange: true });
  }

}
