import { Component,Input,OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() nuevoHijo!: string;
  @Input() usuario!: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
