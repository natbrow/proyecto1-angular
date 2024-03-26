import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { NotExpr } from '@angular/compiler';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: GaleriaComponent },
  { path: 'productos/:id', component: ProductoComponent },
  { path: 'gestion', component: GestionComponent },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
