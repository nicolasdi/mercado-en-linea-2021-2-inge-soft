import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../interfaces/producto';
import { Usuario } from '../../../interfaces/usuario';
import { ProductoService } from '../../../servicios/producto.service';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  key: string;
  usuario: Usuario;
  productos: Producto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.getUsuario();

    // Seleccionos los productos segun la solicitud del usuario.
    this.route.queryParams.subscribe(params => {
      this.key = params.key;
      if (this.key) {
        this.getProductosKey(params.key);
      } else {
        this.getProductos();
      }
    });
  }

  // Obtenemos la informacion del usuario que ha ingresado al sistema.
  getUsuario() {
    const id = Number(this.route.snapshot.paramMap.get('id-usr'));
    this.usuarioService
      .getUsuario(id)
      .subscribe(usuario => (this.usuario = usuario));
  }

  // Obtenemos la informacion de todos los productos de todo el sistema.
  getProductos() {
    this.productoService.getAllProductos().subscribe(
      (response: Producto[]) => {
        this.productos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Obtenemos la informacion de todos los productos de todo el sistema que coincidan con key.
  getProductosKey(key: string) {
    this.productoService.getAllProductosBusqueda(key).subscribe(
      (response: Producto[]) => {
        this.productos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Redirige al usuario a los detalles del producto con identidicator id.
  infoProducto(id: number) {
    this.router.navigate(
      ['../../detalles-producto', this.usuario.id.toString(), id.toString()],
      { queryParams: { key: this.key }, relativeTo: this.route }
    );
  }
}
