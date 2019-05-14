import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';
import { ClienteModel } from '../models/clienteModel';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlService : string = 'cliente';
  constructor(private restClientService: RestClientService) { }

  public getClientes() {
    return this.restClientService.doGet(this.urlService);
  }

  public getCliente(idCliente: number) {
    return this.restClientService.doGet(this.urlService + '/' + idCliente);
  }

  public postCliente(cliente: ClienteModel) {
    return this.restClientService.doPost(this.urlService + '/', cliente);
  }

  public putCliente(cliente: ClienteModel) {
    return this.restClientService.doPut(this.urlService + '/', cliente);
  }

  public deleteCliente(idCliente: number) {
    return this.restClientService.doDelete(this.urlService + '/' + idCliente);
  }
}
