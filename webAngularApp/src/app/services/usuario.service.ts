import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';
import { UsuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlService : string = 'usuario';
  constructor(private restClientService: RestClientService) { }

  public getUsuarios() {
    return this.restClientService.doGet(this.urlService);
  }

  public getUsuario(idUsuario: string) {
    return this.restClientService.doGet(this.urlService + '/' + idUsuario);
  }

  public postUsuario(usuario: UsuarioModel) {
    return this.restClientService.doPost(this.urlService + '/', usuario);
  }

  public putUsuario(usuario: UsuarioModel) {
    return this.restClientService.doPut(this.urlService + '/', usuario);
  }

  public deleteUsuario(idUsuario: string) {
    return this.restClientService.doDelete(this.urlService + '/' + idUsuario);
  }

}