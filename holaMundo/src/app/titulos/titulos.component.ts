import { Component, OnInit } from '@angular/core';

//decorador 
@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})

export class TitulosComponent implements OnInit {


  nombre:string = 'Maria';
  apellido:string = 'Perez';
  alumno:any={
    nombre:'Carlos',
    apellido:'Pineda',
    edad:21
  }

  //propierty binding
  imagen:string ="https://t.ipadizate.es/2018/02/Logo-de-Apple-640x336.jpg"
  inputNuevo:string = "propierty binding --> Este texto es una variable y se carga en el objeto input usando su propiedad de value"
  constructor() { }

  correo:string; 
  clave:string; 

  ingresar(){
    console.log(this.correo);
    console.log(this.clave);
  }

  llamarAlert(){
    alert("Ha hecho doble clic")
  }

  cadaCambio(){
    console.log(this.correo);
    console.log(this.clave);
  }

  //recibe el valor capturado del evento
  escribir(valor:string){
    console.log(valor);
  }

  //Evento evento focus
  colorearFondo(evento){
    console.log(evento);  
    evento.srcElement.style.background = "red"
    evento.srcElement.style.width = "200px"
    evento.srcElement.style.border.color = "green"
  }

/* Evento KeyDown  */

keyDown(evento){
  console.log(evento)
  if(evento.key=="Enter"){
    alert("ingresando al Sistema")
  }
}


/* Evento MouseEnter */

cambiarTamano(evento){
  evento.srcElement.style.width = "200px"
  evento.srcElement.style.height = "200px"
}

/* Evento MouseLeave */
reducirTamano(evento){
  evento.srcElement.style.width = "100px"
  evento.srcElement.style.height = "100px"
}


  // se ejecuta cunado la aplicacion se esta iniciando
  ngOnInit(): void {
  }

}
