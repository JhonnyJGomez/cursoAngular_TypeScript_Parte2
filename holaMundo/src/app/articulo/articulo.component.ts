import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Array<Articulo> = new Array<Articulo>()
  
    
  constructor(private ruta:Router) { }

  ngOnInit(): void {

    this.articulos.push(
      {
      nombre: "TV Samsung 42",
      descripcion: "TV LCD 42 pulgadas, smartTV",
      precio: 1000,
      precioMayorista: 8000,
      stock:100
      },
      {
        nombre: "MacBook Pro 24 ",
        descripcion: "Laptop MackBook Pro 24 pulgadas, 12GB RAM",
        precio: 2500,
        precioMayorista: 2300,
        stock:150
  
      },
      {
        nombre: "Speaker BOSE ",
        descripcion: "Speacker Bose LTS",
        precio: 800,
        precioMayorista: 750,
        stock:200
  
      }
      )
    
  }

  pasarParametro(listaarticulo){
    this.ruta.navigate(['articuloDetalle', {articulo: JSON.stringify(listaarticulo)}])
  }
}
