import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';
import { PessoaModel } from '../models/pessoaModel';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlService : string = 'pessoa';
  constructor(private restClientService: RestClientService) { }

  public getPessoas() {
    return this.restClientService.doGet(this.urlService);
  }

  public getPessoa(idPessoa: number) {
    return this.restClientService.doGet(this.urlService + '/' + idPessoa);
  }

  public postPessoa(pessoa: PessoaModel) {
    return this.restClientService.doPost(this.urlService + '/', pessoa);
  }

  public putPessoa(pessoa: PessoaModel) {
    return this.restClientService.doPut(this.urlService + '/', pessoa);
  }

  public deletePessoa(idPessoa: number) {
    return this.restClientService.doDelete(this.urlService + '/' + idPessoa);
  }

}
