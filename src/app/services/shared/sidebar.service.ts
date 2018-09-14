import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any =[
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu :[
        {titulo: 'Dashboard', url : '/dashboard'},
        {titulo: 'ProgressBar', url : '/progress'},
        {titulo: 'Gráficas', url : '/graficas1'},
        {titulo: 'Promesas', url : '/promesas'},
        {titulo: 'Ajuuste del Tema', url : '/accout'},
        {titulo: 'RXSJ', url : '/rxjs'}
      ]
    }
  ]
  constructor() { }
}
