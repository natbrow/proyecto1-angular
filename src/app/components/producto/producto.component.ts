import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/producto.service';
import { Producto } from '../galeria/interface/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  private productoService = inject(ProductosService)
  rutaActivada = inject(ActivatedRoute)

  id!: string | null;
  producto!: Producto;



  ngOnInit() {
    this.rutaActivada.paramMap.subscribe((params) => {
      // console.log(params.get("id"));
      this.id = params.get('id');
    });

    this.productoService.getProductoById(this.id).subscribe((data: any) => {
      this.producto = data;
    });
  }
}
