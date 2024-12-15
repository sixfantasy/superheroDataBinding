import { SuperheroesService } from '../servicio-superheroes.service';
import { Superheroe } from './../superheroe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editor-superheroe',
  templateUrl: './editor-superheroe.component.html',
  styleUrls: ['./editor-superheroe.component.css'],
})
export class EditorSuperheroeComponent {
  superheroes: Superheroe[] = [];
  constructor(private superheroesService: SuperheroesService) {
    this.superheroes = this.superheroesService.listarHeroes();
  }
  nombre: string = '';
  habilidades: string = '';
  imagenHeroe: string = '';
  altImagenHeroe: string = '';
  disponibilidad: boolean = false;
  index: number = 1;

  enviarDatosSuperheroe() {
    this.superheroesService.editarHeroe (
      this.index,
      this.nombre,
      this.habilidades,
      this.imagenHeroe,
      this.altImagenHeroe,
      this.disponibilidad,
    );
  }
  encontrarIndiceHeroe(nombreHeroe: string): number {
    return this.superheroes.findIndex(
      (superheroe) => superheroe.nombre === nombreHeroe
    );
  }
  agregarSuperheroe() {
    this.superheroesService.agregarSuperheroe(new Superheroe(this.nombre, this.habilidades.split(','), this.imagenHeroe, this.altImagenHeroe, this.disponibilidad));
  }

  eliminarSuperheroe(){
    this.superheroesService.eliminarSuperheroe(this.index);
  }
}
