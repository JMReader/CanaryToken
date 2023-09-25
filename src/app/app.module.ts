import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListadoHistorialComponent } from './components/listado-historial/listado-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistorialComponent,
    PrincipalComponent,
    ListadoHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
