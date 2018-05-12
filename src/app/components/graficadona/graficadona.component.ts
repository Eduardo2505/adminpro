import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})
export class GraficadonaComponent implements OnInit {



  @Input() leyenda: string = 'Leyenda';
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
