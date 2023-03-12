import { Artista } from "./artistaClass";
import { Disco } from "./discoClass";
import { Cancion } from "./cancionClass";
import { Single } from "./singleClass";

export class BibliotecaMusical{
  public artistas: Artista[];

  /**
   * Constructor de la clase BibliotecaMusical
   * @param artistas 
   */
  constructor(artistas: Artista[]){
    this.artistas = artistas;
  }

  /**
   * Metodo para mostrar la biblioteca en formato tabla
   */
  public mostrarBiblioteca(){
    // comentado para tests
    // console.table(this.artistas);
  }

  /**
   * Metodo para obtener el nombre (ID) de los artisas de la biblioteca
   * @returns 
   */
  public getArtistasId(): string[]{
    this.mostrarBiblioteca();
    const artistasId: string[] = [];
    this.artistas.forEach((artista) => {
      artistasId.push(artista.nombreAr);
    });
    return artistasId;
  }

  /**
   * Obtener el numero de canciones de un album especificando el artista y el album
   * @param singer 
   * @param album 
   * @returns 
   */
  public getSongsOfSpecificAlbumDoneBySpecificDisc(singer: string, album: string): number{
    let numOfSongs = 0;
    this.artistas.forEach((artist) => {
      if (artist.nombreAr === singer) {
        numOfSongs = artist.getNumOfSongsInSelectedDisk(album);
      }
    });
    return numOfSongs;
  }

  /**
   * Metodo para obtener el tiempo total de las canciones de un album especificando el artista y el album
   * @param singer 
   * @param album 
   * @returns 
   */
  public getTimeOfSongsOfSpecificAlbumDoneBySpecificSinger(singer: string, album: string): number{
    let totalTime = 0;
    this.artistas.forEach((artist) => {
      if (artist.nombreAr === singer) {
        totalTime = artist.getTimeOfSongsInSelectedDisk(album);
      }
    });
    return totalTime;
  }

  /**
   * Meotodo para obtener el numero de reproducciones de un album especificando el artista y el album
   * @param singer 
   * @param album 
   * @returns 
   */
  public getNumOfReproductionOfSpecificDisk(singer: string, album: string): number{
    let numOfReproductions = 0;
    this.artistas.forEach((artist) => {
      if (artist.nombreAr === singer) {
        numOfReproductions = artist.getDiskReproductions(album);
      }
    });
    return numOfReproductions;
  }

  /**
   * Metodo para obtener una array de artistas con todo el contenido de estos
   * @returns 
   */
  public getArtistas(): Artista[]{
    return this.artistas;
  }

  /**
   * Metodo para obtener un artista especificando su nombre
   * @param name 
   * @returns 
   */
  public findArtistByName(name: string): string[]{
    const artistasStrArr: string[] = [];
    this.artistas.forEach((artista) => {
      if (artista.nombreAr === name) {
        artistasStrArr.push("NAME_: " + artista.nombreAr);
        artistasStrArr.push("LISTENERS_: " + artista.numero_de_oyentes_mensuales);
        artistasStrArr.push("DISCOGRAPHY_: ");
        artistasStrArr.push(artista.discografia.toString()); //! esto deberia cambiarlo 
      }
    });
    return artistasStrArr;
  }

  /**
   * Metodo para obtener un album especificando su nombre
   * @param name 
   * @returns 
   */
  public findAlbumByName(name: string): string{
    // let controlFlag = false;
    let album = "";
    this.artistas.forEach((artista) => {
      artista.discografia.getDiscos().forEach((disco) => {
        if (disco instanceof Disco) {
          if (disco.name === name) {
            album = disco.name;
          }
        } else if (disco instanceof Single) {
          if (disco.getName() === name) {
            album = disco.getName();
          }
        }
      });
    });
    return album;
  }

  /**
   * Metodo para imprimir en formato tabla el contenido de una canción especificando su nombre
   * @param title 
   */
  public findSongsByTitleTable(title: string): void{
    let song: Cancion = new Cancion("", 0,"",true, 0);
    this.artistas.forEach((artista) => {
      artista.discografia.getDiscos().forEach((disco) => {
        if (disco instanceof Disco) {
          disco.getSongs().forEach((cancion) => {
            if (cancion.getTitle() === title) {
              song = cancion;
            }
          });
        }
      });
    });
    // comentado para tests
    // console.table(song);
  }

  /**
   * Metodo para buscar una canción especificando su nombre
   * @param title 
   * @returns 
   */
  public findSongsByTitle(title: string): string{ 
    this.findSongsByTitleTable(title);
    let song = "";
    this.artistas.forEach((artista) => {
      artista.discografia.getDiscos().forEach((disco) => {
        if (disco instanceof Disco) {
          disco.getSongs().forEach((cancion) => {
            if (cancion.getTitle() === title) {
              song = cancion.nombreCa;
            }
          });
        } 
      });
    });
    return song;
  }
}