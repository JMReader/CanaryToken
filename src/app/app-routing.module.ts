import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListadoHistorialComponent } from './components/listado-historial/listado-historial.component';


const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'listado-historial', component: ListadoHistorialComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
