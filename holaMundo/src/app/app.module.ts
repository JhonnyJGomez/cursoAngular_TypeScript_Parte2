import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule} from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';

@NgModule({
  declarations: [ //Compoenentes
    AppComponent,
    TitulosComponent,
    DirectivaComponent
  ],
  imports: [ //Plugins 
    BrowserModule,
    FormsModule
  ],
  providers: [],  //Servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
