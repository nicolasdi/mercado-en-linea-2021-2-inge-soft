import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../../interfaces/producto';
import { Usuario } from '../../../interfaces/usuario';
import { ProductoService } from '../../../servicios/producto.service';
import { UsuarioService } from '../../../servicios/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {
  usuario: Usuario
  producto: Producto
  creacionForm: FormGroup

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getUsuario();
  }

  constuirFormularioActualizar(){
    console.log(this.producto.titulo);
    this.creacionForm = this.formBuilder.group({
      id: [this.producto.id, Validators.required],
      titulo: [this.producto.titulo, Validators.required],
      descripcion: [this.producto.descripcion, Validators.required],
      foto: [this.producto.foto, Validators.required],
      precio: [this.producto.precio, [Validators.required,Validators.min(0)]],
      fk_user: [this.usuario.id],
    });
  }

  construirFormularioNuevo(){
    this.creacionForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      foto: ['', Validators.required],
      precio: ['', [Validators.required,Validators.min(0)]],
      fk_user: [this.usuario?.id],
    });
  }

  // Obtenemos la informacion del usuario que ha ingresado al sistema.
  getUsuario() {
    const id = Number(this.route.snapshot.paramMap.get('id-usr'));
    this.usuarioService
      .getUsuario(id)
      .subscribe(usuario => {this.usuario = usuario;         
        this.route.queryParams.subscribe(params => { 
          const key = Number (params.key)
          if (key){
            this.getProducto(key);
          } else {
            this.construirFormularioNuevo();
          }
        });
      }
    );
  }

  // Obtenemos la informacion del producto con indentificar id.  
  getProducto(id: number) {
    this.productoService
      .getProducto(id)
      .subscribe(
        (response: Producto) => {
        this.producto = response;
        this.constuirFormularioActualizar();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  // Solicitamos al backend guarde o actualice el producto segun corresponda.
  guardaProducto(datos){
    if (!this.producto) {
      this.productoService.addProducto(datos).subscribe(
        (response: boolean) => {
          this.regresar();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    } else {
      this.productoService.putProducto(datos).subscribe(
        (response: boolean) => {
          this.regresar();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      ); 
    }
  }

  // Redirige al usuario a administrar los productos que oferta
  regresar(){
    this.router.navigate(['../../administra', this.usuario.id] , { relativeTo: this.route });
  }

  //Devuleve el atributo titulo de creacionFrom.
  get titulo() {
    return this.creacionForm.get('titulo');
  }

  //Devuleve el atributo descripcion de creacionFrom.
  get descripcion() {
    return this.creacionForm.get('descripcion');
  }

  //Devuleve el atributo precio de creacionFrom.
  get precio() {
    return this.creacionForm.get('precio');
  }

  //Devuleve el atributo foto de creacionFrom.
  get foto() {
    return this.creacionForm.get('foto');
  } 
}