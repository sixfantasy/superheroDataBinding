import { Superheroe } from './superheroe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuperheroesService {

  listaSuperheroes: Superheroe[] = [
    new Superheroe(
      'Superman',
      ['Vuelo', 'Fuerza sobrenatural'],
      'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/08/26/christopher-lee-como-superman.jpeg',
      'fotoSuperman',
      false,
    ),
    new Superheroe(
      'Batman',
      ['Inteligencia', 'Agilidad'],
      'https://i.blogs.es/cd20cf/1366_2000-9-/1366_2000.jpeg',
      'fotoBatman',
      true,
    ),
  ];
  editarHeroe(
    index: number,
    nombre?: string,
    habilidades?: string,
    imagen?: string,
    altImagen?: string,
    disponibilidad = true
  ) {
    nombre ? (this.listaSuperheroes[index].nombre = nombre) : null;
    habilidades
      ? (this.listaSuperheroes[index].habilidades = habilidades.split(','))
      : null;
    imagen ? (this.listaSuperheroes[index].imagenHeroeUrl = imagen) : null;
    altImagen
      ? (this.listaSuperheroes[index].imagenHeroeAlt = altImagen)
      : null;
    this.listaSuperheroes[index].disponibilidad = disponibilidad;
  }
  agregarSuperheroe(heroe: Superheroe) {
    this.listaSuperheroes.push(heroe);
  }
  eliminarSuperheroe(index: number) {
    this.listaSuperheroes.splice(index, 1);
  }
  listarHeroes() {
    return this.listaSuperheroes;
  }
  constructor() {}
}
