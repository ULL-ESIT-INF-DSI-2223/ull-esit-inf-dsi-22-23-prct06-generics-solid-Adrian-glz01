import { Cancion } from "./cancionClass";


export class Single {
  private name: string;
  private year: number;
  private song: Cancion;
  private version: string | string[];

  /**
   * Constructor de la clase _Single_
   * @param name 
   * @param year 
   * @param song 
   * @param version 
   */
  constructor(name: string, year: number, song: Cancion, version: string | string[]) {
    this.name = name;
    this.year = year;
    this.song = song;
    this.version = version;
  }

  /**
   * Metodo para acceder al nombre del single
   * @returns 
   */
  public getName():string {
    return this.name;
  }

  /**
   *  Metodo para acceder al año del single
   * @returns
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * Metodo para acceder a la cancion del single
   * @returns 
   */
  public getSong(): Cancion  {
    return this.song;
  }

  /**
   * Metodo para acceder a la version del single
   * @returns 
   */
  public getVersion(): string | string[] {
    return this.version;
  }

  /**
   * Metodo para acceder a la duracion de la cancion del single
   * @returns 
   */
  public getSongDuration(): number {
    return this.song.getDuracion;
  }

  /**
   * Metodo para acceder al numero de reproducciones de la cancion del single
   * @returns 
   */
  public getNumOfReproductions(): number {
    return this.song.getNumeroDeReproducciones();
  }
}