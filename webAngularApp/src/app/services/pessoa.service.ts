import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';

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

}
