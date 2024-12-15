import { Component } from '@angular/core';
import { Superheroe } from '../superheroe';
import { SuperheroesService } from '../servicio-superheroes.service';

@Component({
  selector: 'app-lista-superheroes',
  templateUrl: './lista-superheroes.component.html',
  styleUrls: ['./lista-superheroes.component.css'],
})
export class ListaSuperheroesComponent {
  listaSuperheroes: Superheroe[] = []
  constructor(private superheroesService: SuperheroesService) {
    this.listaSuperheroes = this.superheroesService.listarHeroes();
  }
}
