import { Injectable } from '@angular/core';

//importamos la lista de contactos 
import { CONTACTOS } from '../mocks/contacts.mock';
import { IContact } from '../models/contact.interface';

//Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  obtenerContactos(): Promise<IContact[]>{
    //return CONTACTOS; // Devolvemos el listado de contactos
    return Promise.resolve(CONTACTOS);
  }
  // Buscamos contacto por id, dentro de la lista de CONTACTOS Mock
  obtenerContactoPorID(id:number): Observable<IContact> | undefined{
    const contacto = CONTACTOS.find((contacto:IContact)=> contacto.id === id);
    
    //Creamos Observable 
    let observable: Observable<IContact> = new Observable(observer => {
      observer.next(contacto); // emitir un valor a todo componente suscrito
      observer.complete(); // No emitimos mas valores
    });
    
    
    if (contacto) {
      return observable;
    } else {
      return;
    }
  }

}
