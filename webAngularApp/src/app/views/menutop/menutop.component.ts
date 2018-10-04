import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menutop',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.css']
})
export class MenutopComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  sair() {
    this.loginService.executeLogout();
    this.router.navigate(['index'], { skipLocationChange: true });
  }

}
