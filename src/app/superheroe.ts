export class Superheroe {
  nombre: string = ""
  poder: number = 100
  habilidades: string[] = []
  imagenHeroeUrl: string = ""
  imagenHeroeAlt: string = ""
  misionesCompletadas: number = 0
  disponibilidad: boolean = true
  realizarMision(){
    this.misionesCompletadas++
    this.poder += 10
  }
  constructor(nombre: string, habilidades: string[], imagenHeroeUrl:string, imageHeroeAlt: string){
    this.nombre = nombre;
    this.habilidades = habilidades;
    this.imagenHeroeUrl = imagenHeroeUrl;
    this.imagenHeroeAlt = imageHeroeAlt;

  }
}
