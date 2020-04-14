import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  nombre:string
  precio:number
  
  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {

    this.nombre = this.ruta.snapshot.params.nombre
    this.precio = this.ruta.snapshot.params.precio

  }

}
