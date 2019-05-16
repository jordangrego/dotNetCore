import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TelefoneModel } from 'src/app/models/telefoneModel';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {s

  @Input() telefonesCliente: TelefoneModel[]

  constructor() { }

  ngOnInit() {
  }

}
