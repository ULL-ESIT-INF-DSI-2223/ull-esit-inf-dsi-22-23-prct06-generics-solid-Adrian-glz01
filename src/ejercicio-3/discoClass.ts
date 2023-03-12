import { Cancion } from "./cancionClass";

export class Disco {
  public name: string;
  public year: number;
  private songs: Cancion[];

  /**
   * Constructor de la clase Disco
   * @param name 
   * @param año 
   * @param canciones 
   */
  constructor(name: string, year: number, songs: Cancion[]) {
    this.name = name;
    this.year = year;
    this.songs = songs;
  }

  /**
   * Metodo publico para obtener las canciones del disco
   * @returns 
   */
  public getSongs(): Cancion[] {
    return this.songs;
  }

  /**
   * Metodo publico para obtener el numero de canciones del disco
   * @returns 
   */
  public getNumberOfSongs(): number {
    return this.songs.length;
  }

  /**
   * Metodo publico para obtener la duracion total de las canciones del disco
   * @returns 
   */
  public getTimeOfSongsInDisk(): number {
    let time = 0;
    this.songs.forEach((song) => {
      time += song.getDuracion;
    });
    return time;
  }

  /**
   * Metodo publico para obtener el numero de reproducciones del disco
   * @returns 
   */
  public getNumOfReproductions(): number {
    let numOfReproductions = 0;
    this.songs.forEach((song) => {
      numOfReproductions += song.getNumeroDeReproducciones();
    });
    return numOfReproductions;
  }

  /**
   * Metodo publico para los elementos del disco en formato string
   * @param cadena 
   * @returns 
   */
  public getDiscoStr(cadena: string): string {
    let str_aux = "";
    // console.log(cadena + ":")
    this.songs.forEach((song) => {
      if (cadena === this.name) {
        str_aux += song.getTitle() + " ";
      }
    });
    return "DISC_: " + this.name + ", " + this.year + ", " + "[ " + str_aux + "]";
  }

}