import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {


    //retry : sirve para n veces de intentos al entrar el error     
    this.subcription = this.regresaObsevable().pipe(
      retry(2)
    ).subscribe(
      numero => console.log('SUBS', numero),
      error => console.error('Error  en el Obs', error),
      () => console.log('Termino el observador')

    );



  }

  ngOnInit() {

  }

  ngOnDestroy() {
    console.log('La página se va cerrar');
    this.subcription.unsubscribe();

  }

  regresaObsevable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        /*if (contador === 2) {
          //clearInterval(intervalo);
          observer.error('auxilio');
        }*/

      }, 1000);

    }).pipe(

      map(resp => resp.valor),
      filter((valor, index) => {
        //console.log('Filter', valor, index);
        if ((valor % 2) === 1) {
          //impar
          return true;

        } else {
          return false;
        }

      })

    );
    /*.pipe(

      map(resp => {
        return resp.valor;

      })

    );*/

  }

}
