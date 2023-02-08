import { Component, OnInit } from '@angular/core';

//Crear tipo base para el ejemplo
export type Producto = {
  nombre: string;
  precio:number;
  descripcion: string;
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  cargando: boolean = true;
  listaElementos: Producto[] =[
    {
      nombre:'Leche',
      precio: 2500,
      descripcion:'Deslactosada'
    },
    {
      nombre:'Carne',
      precio: 5500,
      descripcion:'Cerdo'
    }
  ];

  opcion:number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida:number){
    this.opcion = opcionEscogida; // el valor cambia, implica un cambio en los elemantos renderizados
  }

}
