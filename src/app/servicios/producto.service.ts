import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable()
export class ProductoService {
  private apiServerURL = 'http://localhost:8080/mercado-en-linea';
  constructor(private http: HttpClient) {}

  // Solicitamos al backend agrega un producto
  addProducto(producto: Producto): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.apiServerURL}/new_product/`,
      producto
    );
  }

  // Solicitamos al backend todos los porductos del sistema
  getAllProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerURL}/all_products/`);
  }

  // Solicitamos al backend todos los productos que oferte el vendedor con identificador fk
  getAllProductosVendedor(fk: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.apiServerURL}/products_by_seller/?id=${fk}`
    );
  }

  // Solicitamos al backend todos los productos que coincidan con la busqueda key
  getAllProductosBusqueda(key: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerURL}/by_keyword/?keyword=${key}`);
  }

  // Solicitamos al backend el producto con identificador id
  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiServerURL}/product_by_id/?id=${id}`);
  }

  // Solicitamos al backend actualizar el producto con identificador id
  putProducto(producto: Producto): Observable<boolean> {
    return this.http.put<boolean>(
      `${this.apiServerURL}/update_product/`,
      producto
    );
  }

  // Solicitamos al backend borrar el producto con indentificador id
  deleteProducto(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.apiServerURL}/delete_product/?id=${id}`
    );
  }

  // Solicitamos al backend registrar la compra del producto con identificador
  // id_producto. El usuario con identificador id_vendedor es quien oferta el
  // producto que el usuario con identificador id_compra compra
  compraProducto(
    correo_comprador: String,
    correo_vendedor: String,
    id_producto: number
  ): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.apiServerURL}/compra/?correocomprador=${correo_comprador}&correovendedor=${correo_vendedor}&idproducto=${id_producto}`
    );
  }
}
