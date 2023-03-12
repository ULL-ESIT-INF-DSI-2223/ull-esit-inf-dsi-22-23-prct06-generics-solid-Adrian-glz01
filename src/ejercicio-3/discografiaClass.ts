import { Disco } from "./discoClass";
import { Single } from "./singleClass";

export class Discografia<T extends Disco | Single> {
  private discos: T[];

  /**
   * Constructor de la clase Discografia
   * @param discos 
   */
  constructor(discos: T[]) {
    this.discos = discos;
  }

  /**
   * Getter de los discos
   * @returns 
   */
  public getDiscos(): T[] {
    return this.discos;
  }
}