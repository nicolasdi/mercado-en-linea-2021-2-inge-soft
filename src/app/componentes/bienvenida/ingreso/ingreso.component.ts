import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresoForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    //Construimos el formulario ingresoForm.
    this.ingresoForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]{16}')]
      ]
    });
  }

  //Solicitamos al backend validar y proporcionar los datos del usuario
  //para darle acceso al sistema.
  ingreso(datos) {
    this.usuarioService.getUsuarioIngreso(datos).subscribe(
      (response) => {
          this.router.navigate(['/mercadoenlinea', response.id.toString()]);
      },
      
      (error: HttpErrorResponse) => {
        alert("Ingreso inválido, intente nuevamente")
      }
    );
  }

  //Devuleve el atributo correo de ingresoFrom.
  get correo() {
    return this.ingresoForm.get('correo');
  }

  //Devuleve el atributo constrasenia de ingresoFrom.
  get contrasenia() {
    return this.ingresoForm.get('contrasenia');
  }
}
