import { Superheroe } from './../superheroe';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor-superheroe',
  templateUrl: './editor-superheroe.component.html',
  styleUrls: ['./editor-superheroe.component.css'],
})
export class EditorSuperheroeComponent {
  @Input() superheroes: Superheroe[] = [];

  nombre: string = '';
  habilidades: string = '';
  imagenHeroe: string = '';
  altImagenHeroe: string = '';
  index: number = 1;
  @Output() EventoNuevoSuperheroe = new EventEmitter<Superheroe>();
  @Output() EventoDatosSuperheroe = new EventEmitter();
  @Output() EventoEliminarSuperheroe = new EventEmitter<number>();
  enviarDatosSuperheroe() {
    this.EventoDatosSuperheroe.emit({
      index: this.index,
      nombre: this.nombre,
      habilidades: this.habilidades,
      imagenHeroe: this.imagenHeroe,
      altImagenHeroe: this.altImagenHeroe,
    });
  }
  encontrarIndiceHeroe(nombreHeroe: string): number {
    return this.superheroes.findIndex(
      (superheroe) => superheroe.nombre === nombreHeroe
    );
  }
  agregarSuperheroe() {
    this.EventoNuevoSuperheroe.emit(new Superheroe(this.nombre, this.habilidades.split(','), this.imagenHeroe, this.altImagenHeroe));
  }

  eliminarSuperheroe(){
    this.EventoEliminarSuperheroe.emit(this.index);
  }
}
