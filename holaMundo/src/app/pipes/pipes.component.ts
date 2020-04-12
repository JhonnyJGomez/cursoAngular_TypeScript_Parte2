import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titulo:string = "Soy un titulo"
  dinero:number = 150020
  ganacias:number = 0.34
  fecha = new Date() 

  constructor() { }

  ngOnInit(): void {
  }

}
