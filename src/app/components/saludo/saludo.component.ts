import { Component, Input, Output,EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

 @Input() nombre: string = "Anonimo"
 @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

 myStyle: object={
  color: 'pink',
  fontSize:'28px',
  fontWeight:'bold'
 }
  constructor() { }

  ngOnInit(): void {
    //Instrucciones previas a larenderizacion del componente
    console.log("ngOnInit del componente saludo")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges CAMBIO: Valor anterior", changes['nombre'].previousValue);
    console.log("ngOnChanges CAMBIO: Valor Nuevo", changes['nombre'].currentValue);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy el componente va desaparecer")
  }


  /* 
  * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
  */
 enviarMensajeAlPadre(): void{
  //alert(`¡Hola, ${this.nombre} Alerta generada desde un click de boton`);
  this.mensajeEmitter.emit(`¡Hola, ${this.nombre} Alerta generada desde un click de boton`);
  } 

}

/* Orden del ciclo de vida de los componentes
* 1. ngOnChanges
* 2. ngOnInit
  3. ngAfterContentInit
  4. ngAfterContentChecked
  5. ngAfterViewInit
  6. ngAfterViewChecked
  7. ngAfterContentChecked
  8. ngAfterViewChecked
* 9. ngOnDestroy

*/
