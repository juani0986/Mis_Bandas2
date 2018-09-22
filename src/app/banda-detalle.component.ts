import { Component, Input } from '@angular/core';
import { Banda } from './banda';

@Component({
    selector: 'banda-detalle',
    templateUrl: './banda-detalle.Component.html',
    styleUrls: ['./banda-detalle.Component.css']

})
export class BandaDetalleComponent{
    @Input() banda: Banda;
}
