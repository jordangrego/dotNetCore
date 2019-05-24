import { Injectable } from '@angular/core';

import { RestClientService } from './rest-client.service';
import { PieChartRequestModel } from '../models/pieChartRequestModel';

@Injectable({
  providedIn: 'root'
})
export class PieChartService {

  urlService : string = 'chart';
  constructor(private restClientService: RestClientService) { }

  public getPieChartData(pieChartRequest: PieChartRequestModel) {
    return this.restClientService.doPost(this.urlService + '/', pieChartRequest);
  }
}
