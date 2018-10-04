import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$('#modalAlert').modal();
  }

  public showModal(): void {
    $('#exampleModal').modal('show');
  }

}
