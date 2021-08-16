import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductoService } from './servicios/producto.service';
import { OpinionService } from './servicios/opinion.service';
import { UsuarioService } from './servicios/usuario.service';
import { RegistroComponent } from './componentes/bienvenida/registro/registro.component';
import { IngresoComponent } from './componentes/bienvenida/ingreso/ingreso.component';
import { InicioComponent } from './componentes/ml/inicio/inicio.component';
import { DescripcionComponent } from './componentes/ml/detalles-producto/descripcion/descripcion.component';
import { OpinionesComponent } from './componentes/ml/detalles-producto/opiniones/opiniones.component';
import { CalificacionComponent } from './componentes/ml/detalles-producto/calificacion/calificacion.component';
import { CompraComponent } from './componentes/ml/detalles-producto/compra/compra.component';
import { AdministraComponent } from './componentes/ml/administra/administra.component';
import { CreacionComponent } from './componentes/ml/creacion/creacion.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductoComponent } from './componentes/producto/producto.component';
import { DetallesProductoComponent } from './componentes/ml/detalles-producto/detalles-producto.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { MLComponent } from './componentes/ml/ml.component';
import { HttpClientModule } from '@angular/common/http';
import { OpinionComponent } from './componentes/opinion/opinion.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    RegistroComponent,
    IngresoComponent,
    InicioComponent,
    DescripcionComponent,
    OpinionComponent,
    OpinionesComponent,
    CalificacionComponent,
    CompraComponent,
    AdministraComponent,
    CreacionComponent,
    ProductoComponent,
    DetallesProductoComponent,
    BienvenidaComponent,
    MLComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductoService, OpinionService, UsuarioService]
})
export class AppModule {}
