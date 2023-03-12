import { Arithmeticable } from "./arithmeticableInterface";


export class ArithmeticalCollection<T extends Arithmeticable<T>> {
  private _elements: T[] = []
  
  /**
   * Mwtodo para añadir elementos a la coleccion
   * @param element 
   */
  addArithmeticable(element: T) {
    this._elements.push(element)
  }
  
  /**
   * Metodo para obtener un elemento de la coleccion, otorgando su indice
   * @param index 
   * @returns 
   */
  getArithmeticable(index: number): T {
    return this._elements[index]
  }
  
  /**
   * Metodo para obtener el numero de elementos de la coleccion
   * @returns
   */
  getNumbeOfArithmeticables(): number {
    return this._elements.length
  }
}