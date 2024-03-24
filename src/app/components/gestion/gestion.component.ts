import { Component, EventEmitter, Output } from '@angular/core';
import { ProductoGaleria } from 'src/app/interface/productoGaleria.interface';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {

  arrProductos: ProductoGaleria[] = [];

  onProductoCreado($event: ProductoGaleria) {
    // Esta función se ejecuta cuando enviamos el formulario
    // Recuperamos en $event el objeto creado dentro del formulario
    this.arrProductos.push($event);
    console.log(this.arrProductos);
  }
}
