import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';
import { ArquivoModel } from '../models/arquivoModel';

@Injectable({
    providedIn: 'root'
})
export class ArquivoService {

    urlService: string = 'files';
    constructor(private restClientService: RestClientService) { }

    public getArquivos() {
        return this.restClientService.doGet(this.urlService);
    }

    public async doGetDowload(idFile: string): Promise<void> {
        const blob = await this.restClientService.downloadResource(idFile);
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank");

    }

    public postArquivo(arquivo: ArquivoModel) {
        return this.restClientService.doPost(this.urlService + '/', arquivo);
    }

    public deleteArquivo(idFile: string) {
        return this.restClientService.doDelete(this.urlService + '/' + idFile);
    }
}
