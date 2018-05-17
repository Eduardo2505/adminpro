import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  cambiarColor(color: string, link: any ) {


        let url = `assets/css/colors/${color}.css`;
        this._document.getElementById('tema').setAttribute('href', url);
        this.aplicarCheck(link);


  }
  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for( let ref of  selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
    console.log(link);
  }

}
