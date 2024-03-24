import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



type GetResponse = {
  id: number;
  name: string;
  price: number;
  description: string;
  stars: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  httpClient = inject(HttpClient)


  getAllProductos() {

    return this.httpClient.get<GetResponse>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
  }

  // getProductoById() {

  // }
  // getByName() {

  // }
}