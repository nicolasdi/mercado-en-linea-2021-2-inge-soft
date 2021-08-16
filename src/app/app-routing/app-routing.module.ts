import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministraComponent } from '../componentes/ml/administra/administra.component';
import { CalificacionComponent } from '../componentes/ml/detalles-producto/calificacion/calificacion.component';
import { CompraComponent } from '../componentes/ml/detalles-producto/compra/compra.component';
import { CreacionComponent } from '../componentes/ml/creacion/creacion.component';
import { DescripcionComponent } from '../componentes/ml/detalles-producto/descripcion/descripcion.component';
import { DetallesProductoComponent } from '../componentes/ml/detalles-producto/detalles-producto.component';
import { IngresoComponent } from '../componentes/bienvenida/ingreso/ingreso.component';
import { InicioComponent } from '../componentes/ml/inicio/inicio.component';
import { OpinionesComponent } from '../componentes/ml/detalles-producto/opiniones/opiniones.component';
import { RegistroComponent } from '../componentes/bienvenida/registro/registro.component';
import { BienvenidaComponent } from '../componentes/bienvenida/bienvenida.component';
import { MLComponent } from '../componentes/ml/ml.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent,
    children: [
      {
        path: 'ingreso',
        component: IngresoComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      }
    ]
  },
  {
    path: 'mercadoenlinea/:id-usr',
    component: MLComponent,
    children: [
      {
        path: 'inicio/:id-usr',
        component: InicioComponent
      },
      {
        path: 'administra/:id-usr',
        component: AdministraComponent
      },
      {
        path: 'creacion/:id-usr',
        component: CreacionComponent
      },
      {
        path: 'creacion/:id-usr/:id-prod',
        component: CreacionComponent
      },
      {
        path: 'detalles-producto/:id-usr/:id-prod',
        component: DetallesProductoComponent,
        children: [
          {
            path: 'descripcion/:id-usr/:id-prod',
            component: DescripcionComponent
          },
          {
            path: 'opiniones/:id-usr/:id-prod',
            component: OpinionesComponent
          },
          {
            path: 'calificacion/:id-usr/:id-prod',
            component: CalificacionComponent
          },
          {
            path: 'compra/:id-usr/:id-prod',
            component: CompraComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
