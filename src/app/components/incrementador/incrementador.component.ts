import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('textProgres')  txtProgress: ElementRef;
  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambiovalor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log(this.leyenda);
    // console.log(this.porcentaje);
  }

  ngOnInit() {
  //  console.log(this.leyenda);
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
    // se coloca el focus en el elemnto
    this.txtProgress.nativeElement.focus();

  }

  onChanges(newValue: number) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    if (newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <=  0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    // elemHTML.value = Number(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambiovalor.emit( this.porcentaje );

  }

}
