import { Component, inject } from '@angular/core';
import { Producto } from 'src/app/components/galeria/interface/productos';
import { ProductosService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  arrProductos: any;
  productoService = inject(ProductosService)

  async ngOnInit() {
    this.productoService.getAllProductos().subscribe(response => {
      console.log(response);
      this.arrProductos = response
    });


  }
}
