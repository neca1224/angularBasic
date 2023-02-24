import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//Modulos Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent} from './components/forms/formulario/formulario.component'
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    SaludoComponent,
    ContactListComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro modulo personalizado
    ListsModule,
    // Importamos el modulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule,
    // Importamos el Reactive FormsModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    // Importamos los modulos de Angular Material que usamos en el formulario
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
