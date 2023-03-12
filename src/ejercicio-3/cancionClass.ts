export class Cancion {
    public nombreCa: string;
    private duracion: number;
    public genero: string;
    public single: boolean;
    public numeroDeReproducciones: number;
  
    /**
     * Constructor de la clase Cancion
     * @param nombreCa 
     * @param duracion 
     * @param genero 
     * @param single 
     * @param numeroDeReproducciones 
     */
    constructor(
      nombreCa: string,
      duracion: number,
      genero: string,
      single: boolean,
      numeroDeReproducciones: number
    ) {
      this.nombreCa = nombreCa;
      this.duracion = duracion;
      this.genero = genero;
      this.single = single;
      this.numeroDeReproducciones = numeroDeReproducciones;
    }
  
    /**
     * Metodo para obtener el titulo de la cancion
     * @returns 
     */
    getTitle(): string {
      return this.nombreCa;
    }
  
    /**
     * Metodo para obtener la duracion de la cancion
     * @returns
     */
    public get getDuracion(): number {
      return this.duracion;
    }
  
    /**
     * Metodo para obtener el numero de reproducciones de la cancion
     * @returns 
     */
    public getNumeroDeReproducciones(): number {
      return this.numeroDeReproducciones;
    }
  
    /**
     * Metodo para devolver los elementos de la cancion en formato string
     * @returns 
     */
    public getSongElementStr(): string {
      return (
        "SONG_: " +
        this.nombreCa +
        ", " +
        this.duracion +
        ", " +
        this.genero +
        ", " +
        this.single +
        ", " +
        this.numeroDeReproducciones
      );
    }
  }
  