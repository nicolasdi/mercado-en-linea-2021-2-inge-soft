import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MLComponent implements OnInit {
  busquedaForm: FormGroup;
  usuario: Usuario | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.getUsuario();

    console.log(this.usuario)
    

    // Construimos el el formulario busquedaForm
    this.busquedaForm = this.formBuilder.group({
      busqueda: ['', Validators.required]
    });
  }

  // Obtenemos la informacion del usuario que ha ingresado al sistema
  getUsuario(): void {
    const id = Number(this.route.snapshot.paramMap.get('id-usr'));
    this.usuarioService
      .getUsuario(id)
      .subscribe(usuario => {this.usuario = usuario;
        if (this.usuario.vendedor) {
          this.administrar();
        } else {
          this.inicio();
        }});
  }

  // Redirige al usuario a la administracion de los productos que oferta.
  administrar() {
    this.router.navigate([
      '/mercadoenlinea',
      this.usuario.id.toString(),
      'administra',
      this.usuario.id.toString()
    ]);
  }

  // Redirige al usuario a la administracion de los productos que oferta.
  inicio() {
    this.router.navigate([
      '/mercadoenlinea',
      this.usuario.id.toString(),
      'inicio',
      this.usuario.id.toString()
    ]);
  }

  // Redirige al usuario a los productos ofertados que coinsidan con su busqueda.
  buscar() {
    const busqueda = this.busquedaForm.get('busqueda').value;
    this.busquedaForm.reset();
    this.router.navigate(
      [
        '/mercadoenlinea',
        this.usuario.id.toString(),
        'inicio',
        this.usuario.id.toString()
      ],
      { queryParams: { key: busqueda } }
    );
  }

  // Redirige al usuario para crear un nuevo producto.
  crear() {
    this.router.navigate([
      '/mercadoenlinea',
      this.usuario.id.toString(),
      'creacion',
      this.usuario.id.toString()
    ]);
  }

  // Cierra la sesion actual del usuario.
  cerrar() {
    this.router.navigate(['']);
  }
}
