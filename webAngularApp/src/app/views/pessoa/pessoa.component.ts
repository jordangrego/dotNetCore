import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';

import { PessoaModel } from '../../models/pessoaModel';
import { StatusEnum } from '../../enums/statusEnum';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  private dataPessoas: PessoaModel[];

  private pessoa: PessoaModel = { idPessoa: null, nome: '' };

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    // teste de enum
    // StatusEnum.available
  }

  public recuperarPessoas() {
    if (localStorage.getItem('token') != null) {
      this.pessoaService.getPessoas().subscribe(data => {
        console.log(JSON.stringify(data));
        this.dataPessoas = data.data
      });
    } else {
      console.log('logar');
    }
  }

  public recuperarPessoa() {
    if (localStorage.getItem('token') != null) {
      this.pessoaService.getPessoa(this.pessoa.idPessoa).subscribe(data => {
        if (data.data != null) {
          this.pessoa = data.data
        }
      });
    } else {
      console.log('logar');
    }
  }

  public limpar() {
    this.dataPessoas = [];
  }
}
