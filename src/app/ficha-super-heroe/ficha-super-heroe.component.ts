import { Component, Input } from '@angular/core';
import { Superheroe } from '../superheroe';

@Component({
  selector: 'app-ficha-super-heroe',
  templateUrl: './ficha-super-heroe.component.html',
  styleUrls: ['./ficha-super-heroe.component.css'],
})
export class FichaSuperHeroeComponent {
  @Input() superheroe: Superheroe = new Superheroe(
    'Heroe Generico',
    ['Habilidad Generica'],
    'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    'Imagen Generica',
    true
  );
}
