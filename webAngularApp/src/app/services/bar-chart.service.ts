import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  urlService : string = 'chart';
  constructor(private restClientService: RestClientService) { }

  public getBarChart() {
    return this.restClientService.doGet(this.urlService);
  }
}