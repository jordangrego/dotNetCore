import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  urlService : string = 'Uf';
  constructor(private restClientService: RestClientService) { }

  public getUfs() {
    return this.restClientService.doGet(this.urlService);
  }

}
