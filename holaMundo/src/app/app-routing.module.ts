import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

const routes: Routes = [
    {   path:'' , component: TitulosComponent   },
    {   path:'pipes' , component: PipesComponent    },
    {   path:'directivas' , component: DirectivaComponent   },
    {   path:'ejemplo' , component: EjemploComponent    },
    {   path:'usuarios' , component: UsuariosComponent, children:[
            {   path:'usuarios/agregar' , component: AgregarUsuariosComponent   },
            {   path:'usuarios/editar', component: EditarUsuariosComponent  }]  },
    {   path:'articulo', component: ArticuloComponent  },
    {   path:'articuloDetalle', component: ArticuloDetalleComponent  },
    {   path:'**' , component: Pagina404Component   }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
