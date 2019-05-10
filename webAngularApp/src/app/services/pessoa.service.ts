import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';
import { PessoaModel } from '../models/pessoaModel';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private restClientService: RestClientService) { }

  public getPessoas() {
    return this.restClientService.doGet('pessoa');
  }

  public getPessoa(idPessoa: number) {
    return this.restClientService.doGet('pessoa/' + idPessoa);
  }

  public postPessoa(pessoa: PessoaModel) {
    return this.restClientService.doPost('pessoa/', pessoa);
  }

  public putPessoa(pessoa: PessoaModel) {
    return this.restClientService.doPut('pessoa/', pessoa);
  }

  public deletePessoa(idPessoa: number) {
    return this.restClientService.doDelete('pessoa/' + idPessoa);
  }

}
