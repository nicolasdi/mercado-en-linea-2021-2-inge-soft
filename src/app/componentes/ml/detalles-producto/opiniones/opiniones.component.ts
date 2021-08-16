import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Opinion } from '../../../../interfaces/opinion';
import { Producto } from '../../../../interfaces/producto';
import { OpinionService } from '../../../../servicios/opinion.service';
import { ProductoService } from '../../../../servicios/producto.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  producto: Producto;
  opiniones: Opinion[];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private opinionService: OpinionService
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }

  // Obtenemos la informacion del producto con indentificar id.
  getProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id-prod'));
    this.productoService
      .getProducto(id)
      .subscribe(producto => {this.producto = producto;     this.getOpiniones();});
  }

  // Obtenemos las opiniones asociadas al producto.
  getOpiniones() {
    this.opinionService.getOpiniones(this.producto.id).subscribe(
      (response: Opinion[]) => {
        this.opiniones = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
