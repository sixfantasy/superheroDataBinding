import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSuperheroesComponent } from './lista-superheroes/lista-superheroes.component';
import { FichaSuperHeroeComponent } from './ficha-super-heroe/ficha-super-heroe.component';
import { EditorSuperheroeComponent } from './editor-superheroe/editor-superheroe.component';
import { FormsModule } from '@angular/forms';
import { SuperheroesService } from './servicio-superheroes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaSuperheroesComponent,
    FichaSuperHeroeComponent,
    EditorSuperheroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SuperheroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
