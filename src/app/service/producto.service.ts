import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




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
  // borrarProducto(id:) {
  //   return this.httpClient.delete()

  // }
}