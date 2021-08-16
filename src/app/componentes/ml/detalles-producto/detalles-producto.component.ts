import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../interfaces/producto';
import { ProductoService } from '../../../servicios/producto.service';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../servicios/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  key: string;
  usuario: Usuario;
  producto: Producto;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    // Guardamos el valor de la consulta del usuario.
    this.route.queryParams.subscribe(params => {
      if (!this.key) {
        this.key = params.key;
      }
    });

    this.getUsuario();
    this.getProducto();
  }

  // Obtenemos la informacion del usuario que ha ingresado al sistema.
  getUsuario(): void {
    const id = Number(this.route.snapshot.paramMap.get('id-usr'));
    this.usuarioService
      .getUsuario(id)
      .subscribe(usuario => (this.usuario = usuario));
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

  // Redirige al usuario a la informacion particular del producto.
  informacion(nombre: string) {
    this.router.navigate(
      [nombre, this.usuario.id.toString(), this.producto.id.toString()],
      { relativeTo: this.route }
    );
  }

  // Redirige al usuario a la vista anterior.
  regresar() {
    if (!this.key) {
      this.router.navigate([
        '/mercadoenlinea',
        this.usuario.id.toString(),
        'inicio',
        this.usuario.id.toString()
      ]);
    } else {
      this.router.navigate(
        [
          '/mercadoenlinea',
          this.usuario.id.toString(),
          'inicio',
          this.usuario.id.toString()
        ],
        { queryParams: { key: this.key } }
      );
    }
  }
}
