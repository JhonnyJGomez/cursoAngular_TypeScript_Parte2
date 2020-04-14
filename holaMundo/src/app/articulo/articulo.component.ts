import { Component, OnInit } from '@angular/core';

interface Articulo{
  nombre:string,
  descripcion:string,
  precio:number
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Array<Articulo> = new Array<Articulo>()
  
    
  constructor() { }

  ngOnInit(): void {

    this.articulos.push(
      {
      nombre: "TV Samsung 42",
      descripcion: "TV LCD 42 pulgadas, smartTV",
      precio: 1000
      },
      {
        nombre: "MacBook Pro 24 ",
        descripcion: "Laptop MackBook Pro 24 pulgadas, 12GB RAM",
        precio: 2500
      },
      {
        nombre: "Speaker BOSE ",
        descripcion: "Speacker Bose LTS",
        precio: 800
      }
      )
    
  }

}
