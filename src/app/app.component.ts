import { Component } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBasic';
  contador: number = 0;
  base = 5;
  nuevoHijo!: string; 
  nombre = "Rueda1";
  usuario = "@neca1224"


  usuarios:Usuario[]=[
  { nombre:"Camila",
    apellido:"Cabello",
    direccion:"Cra 27 No 8-66",
    nombreHijos:["Andrea","Juanita"]
  },
  { nombre:"Dua",
    apellido:"Lipa",
    direccion:"Cra 27 No 8-69",
    nombreHijos:["Carlos","Mario"]
  },
  { nombre:"Karol",
    apellido:"G",
    direccion:"Cra 27 No 8-25",
    nombreHijos:["Carlos","Jazmin"]
  }
]

  constructor() {}

  sumar(numero:number){
    this.contador = this.contador + numero;
  }

  restar(numero:number){
    this.contador = this.contador - numero;
  }

}
