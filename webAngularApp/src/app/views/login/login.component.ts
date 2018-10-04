import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/loginModel';

import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(AlertComponent) alertComponent: AlertComponent;

  constructor(private loginService: LoginService, private router: Router) { }

  login: LoginModel = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  public executeLogin() {
    this.loginService.executeLogin(this.login);
    if (localStorage.getItem('token') != '') {
      this.router.navigate(['pessoa'], { skipLocationChange: true });
    } else {
      console.log('nao logado');
      this.alertComponent.showModal();
    }
    //this.alertComponent.showModal();
  }

}
