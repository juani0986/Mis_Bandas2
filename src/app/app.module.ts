import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BandaDetalleComponent } from './banda-detalle.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
