import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambiovalor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log(this.leyenda);
    console.log(this.porcentaje);
  }

  ngOnInit() {
    console.log(this.leyenda);
  }

  cambiarvalor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambiovalor.emit( this.porcentaje );

  }

}
