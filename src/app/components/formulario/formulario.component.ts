import { Component, EventEmitter, Output } from '@angular/core';
import { ProductoGaleria } from 'src/app/interface/productoGaleria.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nuevoProducto: ProductoGaleria = {
    nombre: '', precio: 0, descripcion: '', ruta: '', opiniones: 0
  }

  @Output() productoCreado: EventEmitter<ProductoGaleria> = new EventEmitter();

  onClick() {
    // Emitimos el producto hacia el componente padre
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = {
      nombre: '', precio: 0, descripcion: '', ruta: '', opiniones: 0
    }
  }

}
