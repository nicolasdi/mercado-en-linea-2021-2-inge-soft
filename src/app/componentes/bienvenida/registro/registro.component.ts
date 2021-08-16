import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    //Construimos el formulario registroForm
    this.registroForm = this.formBuilder.group(
      {
        username: [
          '',
          [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9_]*')]
        ],
        correo: ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        comprador: [false],
        vendedor: [false]
      },
      {
        validator: [tipoUsuario()]
      }
    );
  }

  //Solicitamos al backend registre al usuario.
  registrarUsuario(datos) {
    this.usuarioService.addUsuario(datos).subscribe(
      (response: Usuario) => {
        alert(
          'Registro exitoso. Consulte su correo para conocer su contraseña.'
        );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    this.registroForm.reset();
  }

  //Devuleve el atributo username de registroFrom.
  get username() {
    return this.registroForm.get('username');
  }

  //Devuleve el atributo correo de registroFrom.
  get correo() {
    return this.registroForm.get('correo');
  }

  //Devuleve el atributo telefono de registroFrom.
  get telefono() {
    return this.registroForm.get('telefono');
  }

  //Devuleve el atributo comprador de registroFrom.
  get comprador() {
    return this.registroForm.get('comprador');
  }

  //Devuleve el atributo vendedor de registroFrom.
  get vendedor() {
    return this.registroForm.get('vendedor');
  }
}

//Valida que el usuario haya seleccionado unicamente uno de los tipos de usuario.
function tipoUsuario(): ValidatorFn {
  return (formGroup: FormGroup) => {
    const vendedor = formGroup.get('vendedor');
    const comprador = formGroup.get('comprador');

    if (vendedor.value ^ comprador.value) {
      return null;
    }

    return { tipoUsuario: true };
  };
}
