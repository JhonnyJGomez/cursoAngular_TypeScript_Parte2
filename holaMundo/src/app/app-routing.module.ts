import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
    {
        path:'titulos' , component: TitulosComponent
    },
    {
        path:'pipes' , component: PipesComponent
    }
    ,
    {
        path:'directivas' , component: DirectivaComponent
    }
    ,
    {
        path:'ejemplo' , component: EjemploComponent
    }
    ,
    {
        path:'**' , component: Pagina404Component
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
