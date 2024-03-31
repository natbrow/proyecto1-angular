import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../components/galeria/interface/productos';




// type GetResponse = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   stars: number;
//   image: string;
// }

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = 'http://localhost:3004/Productos'
  httpClient = inject(HttpClient)


  getAllProductos() {

    return this.httpClient.get(`${this.baseUrl}`)

  }
  getProductoById(id: string | null) {
    return this.httpClient.get(`${this.baseUrl}/${id}`)

  }
  crearProducto(nuevoProducto: Producto) {
    return this.httpClient.post(`${this.baseUrl}`, nuevoProducto)
  }
  borrarProducto(id: string | null) {

    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}