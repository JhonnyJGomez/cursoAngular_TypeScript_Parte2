import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule} from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { ContinuaraPipe } from './continuara.pipe';
import { AppRoutingModule } from './app-routing.module';
import { Pagina404Component } from './pagina404/pagina404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [ //Compoenentes
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    EjemploComponent,
    PipesComponent,
    ContinuaraPipe,
    Pagina404Component,
    EncabezadoComponent,
    UsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [ //Plugins 
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  //Servicio
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}


