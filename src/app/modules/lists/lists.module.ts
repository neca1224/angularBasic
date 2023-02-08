import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //Exportamos aquellas clases (componentes/pipes, services, etc)
    // a quien importe este modulo
    BasicListComponent
  ]
})
export class ListsModule { }
