import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../interfaces/producto';
import { Usuario } from '../../../interfaces/usuario';
import { ProductoService } from '../../../servicios/producto.service';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-administra',
  templateUrl: './administra.component.html',
  styleUrls: ['./administra.component.css']
})
export class AdministraComponent implements OnInit {
  usuario: Usuario;
  productos: Producto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.getUsuario();
  }

  // Obtenemos la informacion del usuario que ha ingresado al sistema.
  getUsuario(): void {
    const id = Number(this.route.snapshot.paramMap.get('id-usr'));
    this.usuarioService
      .getUsuario(id)
      .subscribe(usuario => {this.usuario = usuario; this.getProductos()});
  }

  // Obtenemos la informacion de todos los productos que oferte el usuario.
  getProductos() {
    this.productoService.getAllProductosVendedor(this.usuario.id).subscribe(
      (response: Producto[]) => {
        this.productos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Eliminamos el producto con identificador id.
  eliminaProd(id: number) {
    this.productoService.deleteProducto(id).subscribe(
      (response: boolean) => {
        this.getProductos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Actualizamos el producto con identificador id.
  actualizaProd(id: number) {
    this.router.navigate(
      [
        '/mercadoenlinea',
        this.usuario.id.toString(),
        'creacion',
        this.usuario.id.toString()
      ],
      { queryParams: { key: id } }
    );
  }
}
