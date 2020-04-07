import { Component, OnInit } from '@angular/core';

interface producto{
  nombre:string,
  stock:number,
  fabricante:string,
  fechaVence:Date
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  cargando:boolean= true
  
  productos: Array<producto> = [{
    nombre: 'Gaseosa',
    stock: 15,
    fabricante: 'Lindley',
    fechaVence: new Date('12/24/2020')
   },
   {
     nombre: 'arroz',
     stock: 150,
     fabricante: 'Arroz cauca',
     fechaVence: new Date('06/24/2020')
   },
   {
     nombre: 'salchicha',
     stock: 215,
     fabricante: 'Rancheras',
     fechaVence: new Date('08/24/2020')
   }]


  constructor() { }


  ngOnInit(): void {
   
    setTimeout (() => {
      this.cargando = false
   }, 3000);


  }

  alternar(){
    this.cargando = !this.cargando
  }
}



