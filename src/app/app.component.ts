import { Component } from '@angular/core';
import { Banda } from './banda';
export class banda{
  id: number;
  nombre: String;
}

const BANDAS: banda[] =[
  { id: 11, nombre: 'Soda Stereo' },
  { id: 12, nombre: 'Nirvana' },
  { id: 13, nombre: 'Los diablitos' },
  { id: 14, nombre: 'Las hermanitas calle' },
  { id: 15, nombre: 'Wisin y Yandel' }
];

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mis bandas favoritas';
  bandas= BANDAS; 
  /*Banda = {
    id: 1,
    nombre:'Heroes del silencio'*/
  banda: Banda; 

  seleccionar(item: Banda):void{
    this.banda =item;
  }
};

