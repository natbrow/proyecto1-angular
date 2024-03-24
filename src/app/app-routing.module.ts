import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: GaleriaComponent },
  { path: 'gestion', component: GestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
