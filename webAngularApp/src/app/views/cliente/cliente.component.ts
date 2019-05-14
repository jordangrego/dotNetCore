import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  private dataPessoas: ClienteModel[];
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  recuperaCliente() {

  }

}
