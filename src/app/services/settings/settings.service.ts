import { Injectable,Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  };
  guardarAjustes() {
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    console.log("Cargando del Storange");
    if (localStorage.getItem("ajustes")) {
      this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
      console.log("Se crago el tema");
      this.aplicarTema(this.ajustes.tema);
    }else{
      console.log("Cargado Ajustes por defecto");
    }
  }

  aplicarTema(color:string ){
    let url = `assets/css/colors/${color}.css`;
    this._document.getElementById('tema').setAttribute('href', url);    
    this.ajustes.tema=color;
    this.ajustes.temaUrl=url;
    this.guardarAjustes();
  }
  
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }
}


interface Ajustes {
  temaUrl: string;
  tema: string;
}
