import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn() : boolean {
    if(localStorage.getItem('token') != null && localStorage.getItem('token').length > 0  ) {
      return true;
    }

    return false;
  }
}
