import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../../../interfaces/producto';
import { OpinionService } from '../../../../servicios/opinion.service';
import { ProductoService } from '../../../../servicios/producto.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {
  producto: Producto
  calificacionForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private opinionService: OpinionService,
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getProducto();
  }

  construirFormulario(){
        // Construimos el formulario califiacionForm
    this.calificacionForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      calificacion: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(5)
        ])
      ],
      fk: [this.producto?.id]
    });
  }

  // Obtenemos la informacion del producto con indentificar id.
  getProducto() {
    const id = Number(this.route.snapshot.paramMap.get('id-prod'));
    this.productoService
      .getProducto(id)
      .subscribe(producto => {this.producto = producto; this.construirFormulario()});
  }

  // Solicitamos al backend agrega la opinion del producto
  califica(datos) {
    this.opinionService.addOpinion(datos).subscribe(
      (response: boolean) => {
        this.calificacionForm.reset();
        alert('Opinion registrada. Consulte las opiniones del producto para verla.');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Devuleve el atributo  titulo de calificacionForm
  get titulo() {
    return this.calificacionForm.get('titulo');
  }

  // Devuleve el atributo descripcion de calificacionForm
  get descripcion() {
    return this.calificacionForm.get('descripcion');
  }

  // Devuleve el atributo calificacion de calificacionForm
  get calificacion() {
    return this.calificacionForm.get('calificacion');
  }
}
