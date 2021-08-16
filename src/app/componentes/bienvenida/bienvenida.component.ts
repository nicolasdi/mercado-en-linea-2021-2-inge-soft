import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  // Redirige al usuario al formulario de ingreso.
  ingresar() {
    this.router.navigate(['./ingreso'], {
      relativeTo: this.route
    });
  }

  // Redirige al usuario al formulario de registro.
  registrarse() {
    this.router.navigate(['./registro'], {
      relativeTo: this.route
    });
  }
}
