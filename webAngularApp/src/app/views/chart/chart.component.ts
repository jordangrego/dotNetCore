import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { Router, ActivatedRoute } from "@angular/router";

import { DialogService } from "ng6-bootstrap-modal";
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

import { PieChartService } from "src/app/services/pie-chart.service";
import { PieChartRequestModel } from "src/app/models/pieChartRequestModel";
import { PieChartResponseModel } from "src/app/models/pieChartResponseModel";
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';
import { BarChartService } from 'src/app/services/bar-chart.service';
import { BarChartResponseModel } from 'src/app/models/barChartResponseModel';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  
  // PIE ***********************
  public pieChartColors: Array<any> = [
    {
      backgroundColor: [
        '#00427F',
        '#0066BD',
        '#66B5CC',
        '#F0E4C5',
        '#D6C28F',
        '#000080',
        '#FF00FF',
        '#800080'
      ]
    }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  updatePieChart() {
    let model: PieChartRequestModel = new PieChartRequestModel();
    model.mes = 1;
    model.ano = 2019;

    this.pieChartLabels = [];
    this.pieChartData = [];

    this.pieChartService.getPieChartData(model).subscribe(data => {
      let dadosPie: PieChartResponseModel[] = data.data;
      let dataPie = [];
      let labelPie = [];

      for (var i = 0; i < dadosPie.length; i++) {
        labelPie.push(dadosPie[i].labelData);
        dataPie.push(dadosPie[i].valueData); // pieData.valueData
      }

      this.pieChartLabels = labelPie;
      this.pieChartData = dataPie;

    });
  }

  // BARS ***********************
  public barChartColors: Array<any> = [];

  public cores: Array<any> = ['#591202', '#EBE3CC'];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = [''];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
 
  public dadosBar: BarChartResponseModel[];
  public dataBar: any[];

  updateBarChart() {

    this.barChartService.getBarChart().subscribe(data => {
      this.dadosBar = data.data;
      this.dataBar = [];
      let labelBar = [];

      if (this.dadosBar.length > 0) {
        let qtdSeries: number = this.dadosBar[0].listaValueData.length;
        for (var s = 0; s < qtdSeries; s++) {
          let serie: ChartDataSets = { data: [], label: 'Serie ' + (s) };
          this.dataBar.push(serie);
        }
      }

      for (var i = 0; i < this.dadosBar.length; i++) {
        labelBar.push(JSON.parse(JSON.stringify(this.dadosBar[i].labelData)));

        for (var j = 0; j < this.dadosBar[i].listaValueData.length; j++) {
          this.dataBar[j].data.push(JSON.parse(JSON.stringify(this.dadosBar[i].listaValueData[j])));
        }
      }

      // trata cores
      let backgrounds : any = [];
      for (var c = 0; c < this.cores.length; c++) {
        let background: any = { backgroundColor: [] };

        for(var cb = 0; cb < this.dadosBar.length; cb++) {
          background.backgroundColor.push(JSON.parse(JSON.stringify(this.cores[c])));
        }

        backgrounds.push(JSON.parse(JSON.stringify(background)));
      }

      this.barChartColors = backgrounds;
      this.barChartLabels = labelBar;
      this.barChartData = JSON.parse(JSON.stringify(this.dataBar));
    });
  }
  // ***************************************************************

  constructor(
    private pieChartService: PieChartService,
    private barChartService: BarChartService,
    private dialogService: DialogService,
    private router: Router) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
     this.updatePieChart();
    this.updateBarChart();
  }

}
