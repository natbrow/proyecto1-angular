import { Component, Input } from '@angular/core';
import { ProductoGaleria } from 'src/app/interface/productoGaleria.interface';

@Component({
  selector: 'app-producto-creado',
  templateUrl: './producto-creado.component.html',
  styleUrls: ['./producto-creado.component.css']
})
export class ProductoCreadoComponent {

  @Input() productos: ProductoGaleria[] = [];

}
