import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    SaludoComponent,
    ContactListComponent,
    LoginFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro modulo personalizado
    ListsModule,
    // Importamos el modulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
