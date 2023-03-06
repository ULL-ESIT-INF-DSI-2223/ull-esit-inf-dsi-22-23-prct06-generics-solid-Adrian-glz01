// clase generica para cualquier tipo que implemente los metodos de la clase lista sin usar 
// funcionalidades proporcionadas por array.prototype solamente []

export class Lista<T extends (string|number|boolean|symbol|Lista<T>)  > { // tengo que ver si meter mas tuipor de datos
  private lista: T[];

  /** constructor de la clase lista */
  constructor() {
      this.lista = [];
  }

  /**
   * Metodo para obtener la lista
   */
  public getList(): T[] {
    return this.lista;
  }

  /**
   * Metodo para añadir los elementos de una lista en otra
   * @param array 
   */
  public append(array: Lista<T> | T ): void { //! Recordatorio: en el informe anotar que queria hacer dos funciones separadas, añadir un push que metiese un elemento, pero asi aprovecho el metodo append para concatenar elementos simples
    if (array instanceof Lista) { // controlamos el tipo que entra
      // instanciamos un valor como la longitud de la primera lista +
      // el tamaño de la segunda lista, este deberia ser el tamaño de la nueva lista
      const counter = this.lenght() + array.lenght();
      let j = 0;
      for (let i = this.lenght(); i < counter; i++) {
        this.lista[i] = array.getList()[j];
        j++;
      }
    } else {
      this.lista.push(array);
    }
  }

  // public override append(item : T): void {
  //   this.lista.push(item);
  // }

  /**
   * Metodo para concatenar un numero variable de listas dentro de una lista que sera retornada
   * para ello se hace uso del metodo append de la clase generica _lista_
   * @param arraydeListas 
   * @returns 
   */
  public concatenate (arraydeListas: Lista<T>[]): Lista<T> {
    for (const lista of arraydeListas) {
      this.append(lista);
    }
    return this;
  }

  /**
   * Metodo publico utilizado para crear una nueva lista con los elementos que cumplan la condicion
   * que se le pasa por parametro
   * @param func 
   * @returns 
   */
  public filter(func: (item: T) => boolean): Lista<T> {
    const listaFiltrada = new Lista<T>();
    for (const item of this.lista) {
      if (func(item)) {
        listaFiltrada.append(item);
      }
    }
    return listaFiltrada
  }

  /**
   * Método publico que te devuelve la longitud de la lista
   * @returns 
   */
  public lenght(): number {
    let counter = 0;
    for (const item of this.lista) {
      counter++;
    }
    return counter;
  }

  /**
   * Implementación del map en nuestra clase, es decir dada una lista y una function
   * se retorna una nueva lista con cada elemento modificado por la funcion.
   * @param lista_ 
   * @param funcTION 
   * @returns 
   */
  public map(funct: (item: T) => T): Lista<T> {
    //? RECORDATORIO [MAP SI DEVUELVE UNA NUEVA LISTA// FOREACH NO]
    const listaMap = new Lista<T>();
    for (const item of this.lista) {
      listaMap.append(funct(item));
    }
    return listaMap;
  }

  /**
   * Funcion que al pasarle un acumulador y una callback reduce cada elemento de la lista
   * a un unico valor utilizando la funcion.
   * @param acumulator 
   * @param funct 
   * @returns 
   */
  public reduce(acumulator: T, funct: (acumulator: T, item: T) => T): T {
    for (const item of this.lista) {
      acumulator = funct(acumulator, item);
    }
    return acumulator;
  }

  /**
   * Metodo que le da la vuelta a la lista
   * @returns 
   */
  public reverse(): Lista<T> {
    const listaReversa = new Lista<T>();
    for (let i = this.lenght() - 1; i >= 0; i--) {
      listaReversa.append(this.lista[i]);
    }
    return listaReversa;
  }

  /**
   * Metodo que replica el funcionamiento de forEach de array.prototype
   * Dado una lista (la de nuestra clase) y una funcion, itera sobre los elementos de la lista
   * e invoca la funcion pasada como argumento para cada uno de ellos 
   * @param func 
   */
  public forEach(func: (item: T) => void) {
    for (const item of this.lista) {
      func(item);
    }
  }
  
}