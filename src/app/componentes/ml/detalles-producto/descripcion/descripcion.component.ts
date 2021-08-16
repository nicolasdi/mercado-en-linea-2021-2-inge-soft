import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto } from '../../../../interfaces/producto';
import { ProductoService } from '../../../../servicios/producto.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }

  // Obtenemos la informacion del producto con indentificar id.
  getProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id-prod'));
    this.productoService.getProducto(id).subscribe(
      (response: Producto) => {
        this.producto = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
