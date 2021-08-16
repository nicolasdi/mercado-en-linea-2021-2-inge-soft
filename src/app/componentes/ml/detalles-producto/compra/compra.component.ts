import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../../../interfaces/producto';
import { Usuario } from '../../../../interfaces/usuario';
import { ProductoService } from '../../../../servicios/producto.service';
import { UsuarioService } from '../../../../servicios/usuario.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  usuario: Usuario;
  producto: Producto;
  compraForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getUsuario();
    this.getProducto();

    // Construimos el formulario compraForm
    this.compraForm = this.formBuilder.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      contrasenia: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('[a-zA-Z0-9]+')
        ])
      ]
    });
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
    this.productoService
      .getProducto(id)
      .subscribe(producto => (this.producto = producto));
  }

  // Solicitamos al backend realize la compra del producto
  compra() {
    this.usuarioService.getUsuario(this.producto.fk_user).subscribe(usuario => {
      this.productoService
      .compraProducto(this.usuario.correo, usuario.correo, this.producto.id)
      .subscribe(
        (response: boolean) => {
          this.compraForm.reset();
          alert('Compra exitosa. Consulte su correo para ver la compra.');
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    })
  }

  // Devuleve el atributo correo de compraFrom
  get correo() {
    return this.compraForm.get('correo');
  }

  // Devuleve el atributo contrasenia de compraFrom
  get contrasenia() {
    return this.compraForm.get('contrasenia');
  }
}
