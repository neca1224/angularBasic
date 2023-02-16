import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/contact.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit,  OnDestroy{

  //Creamos la lista de contactos
  listaContactos: IContact[] = [];
  contactoSeleccionado: IContact | undefined;

  // suscripcion delservicio
  suscription: Subscription | undefined;

  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    //Obtener la lista de contactos que brinda el servicio

    this.contactService.obtenerContactos()
    .then((lista: IContact[]) => this.listaContactos = lista)
    .catch((error) => console.error(`Ha ocurriodo un error con la lista de contactos: ${error}`))
    .finally(()=>console.log(`Peticion Lista de Contactos terminada`));
  }

  obtenerContacto(id: number){
    //console.log(`Obtener Informacion del contacto: ${id}`);
    this.suscription = this.contactService.obtenerContactoPorID(id)?.subscribe(
      (contacto: IContact)=> this.contactoSeleccionado = contacto)
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

}
