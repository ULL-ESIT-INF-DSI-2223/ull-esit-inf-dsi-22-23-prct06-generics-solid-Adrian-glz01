import { Discografia } from "./discografiaClass";
import { Disco } from "./discoClass";
import { Single } from "./singleClass";

export class Artista {
  public nombreAr: string;
  public numero_de_oyentes_mensuales: number;
  public discografia: Discografia<Disco | Single>;

  /**
   * Constructor de la clase Artista
   * @param nombreAr 
   * @param numero_de_oyentes_mensuales 
   * @param discografia 
   */
  constructor(nombreAr: string, numero_de_oyentes_mensuales: number, discografia: Discografia<Disco | Single>) {
    this.nombreAr = nombreAr;
    this.numero_de_oyentes_mensuales = numero_de_oyentes_mensuales;
    this.discografia = discografia;
  }

  // metodo para saber el numero de canciones que hay en un single o en un disco
  public getNumOfSongsInSelectedDisk(diskName: string): number {
    let numSongs = 0;
    this.discografia.getDiscos().forEach((disk) => {
      if (disk instanceof Disco) {
        if (disk.name === diskName) {
          numSongs = disk.getNumberOfSongs();
        }
      } else if (disk instanceof Single) {
        if (disk.getName() === diskName) {
          console.log("Entra")
          numSongs = 1;
        }
      }
    }
    );
    return numSongs;
  }

  /**
   * Metodo que devuelve la duración total de las canciones en un disco de la colección de discos del artista
   * @param diskName 
   * @returns 
   */
  public getTimeOfSongsInSelectedDisk(diskName: string): number {
    let timeOfSongs = 0;
    this.discografia.getDiscos().forEach((disk) => {
      if (disk instanceof Disco) {
        if (disk.name === diskName) {
          timeOfSongs = disk.getTimeOfSongsInDisk();
        }
      } else if (disk instanceof Single) {
        if (disk.getName() === diskName) {
          timeOfSongs = disk.getSongDuration();
        }
      }
    });
    return timeOfSongs;
  }

  /**
   * Metodo para obtener el numero de reproducciones de un disco de la colección de discos del artista
   * @param diskName 
   * @returns 
   */
  public getDiskReproductions(diskName: string): number { 
    let diskReproductions = 0;
    this.discografia.getDiscos().forEach((disk) => {
      if (disk instanceof Disco) {
        if (disk.name === diskName) {
          diskReproductions = disk.getNumOfReproductions();
        }
      } else if (disk instanceof Single) {
        if (disk.getName() === diskName) {
          diskReproductions = disk.getNumOfReproductions();
        }
      }
    });
    return diskReproductions;
  }

  /**
   * Metodo para obtener el nombre de las canciones de un disco
   * @param diskArr 
   * @returns 
   */
  public getElementOfDisks(diskArr: Disco[] | Single):string {
    let list = "";
    if (diskArr instanceof Single) {
      list = diskArr.getName();
    } else {
      diskArr.forEach((song) => {
        list += song.name + " ";
      });
    }
    return list;
  }
}