# Informe 

En está práctica pondremos en prácticas los conceptos aprendidos en las clases de teoría sobre las clases y las interfaces genéricas, asimismo seguiremos trabajando sobre los aspectos aprendidos en prácticas anteriores.

Para el desarrollo de este informe vamos a tener en cuenta el guión de la práctica, se nos han pedido realizar tres ejercicios, por lo que realizaré el informe resolviendo diferentes apartados de cada uno de ellos:

- Enunciado.
- Solución propuesta.
- Algoritmo/Funciones realizadas para la resolución del ejercicio.
- Dificultades. (En caso de que existan)

Asimismo, 

## Índice

1. Problemas práctica
    - 1.1. Dsiflix.
    - 1.2. Clase _lista_.
    - 1.3. Mejora de la clase _biblioteca musical_.
    - PE-102 Arithmeticable...:
2. Dificultades/Reflexión.
3. Referencias

## Problemas práctica 3.

### __Ejercicio 1:__ 

- __Enuncido:__

Se procede a adjuntar el enunciado de la práctica proporcionado por el profesorado:

  Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

  1. Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.

  2. Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.

  3. Tendrá que extender la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.

  4. Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

- __Solución propuesta:__

Para el desarrollo del primer punto se han desarrollado cinco interfaces StreamableX, donde _X_ son las siglas de los métodos que estas implementan, se realizaron cinco para cumplir con los principios __SOLID__.

Tres de estas cinco interfaces implementan métodos de búsqueda, por género, título y por año de publicación:

``` ts
export interface StremeableFBY<T> {
    /**
     * Método para buscar un elemento por su año
     * @param year 
     */
    findByYear(year: number): T[];
}

export interface StremeableFBT {
    /**
     * Método para buscar un elemento por su titulo y saber si existe
     * @param title 
     */
    findByTitle(title: string): boolean;
}

export interface StremeableFBG<T> {
    /**
     * Método para buscar un elemento por su género
     * @param gender 
     */
    findByGender(gender: string): T[];
}
```

Las otras dos interfaces se han creado para implementar un metodo contador para conocer el numero de elementos de nuestra colección y un último método para insertar un nuevo elemento en la colección.

``` ts
export interface StremeableCE {
    /**
     * Método para contar los elementos de una colección de objetos
     */
    countElements(): number;
}

export interface StremeablePE<T> {
    /**
     * Método para añadir un elemento a la colección
     * @param element 
     */
    pushElement(element: T): void;
}
```

Posteriormente se ha desarrollado una clase abstracta genérica llamada _BasicStreamableCollection_ que etenderá las cinco interfaces recien presentadas. Los tres métodos de busqueda se han declarado como abstractos para heredarlos a las clases concretas que se desarrollaran posteriormente, y se ha definido el contador de elementos y el método que inserta un nuevo elemento en la colección:

``` ts
export abstract class BasicStreamableCollection<T> implements StremeableFBY<T>,StremeableFBT,StremeableFBG<T>,StremeableCE,StremeablePE<T> {

    /**
     * Contructor de la clase BasicStreamableCollection
     * @param collection -- Colección de objetos
     */
    constructor (protected collection: T[]) {}

    abstract findByYear(year: number): T[];
    abstract findByTitle(title: string): boolean;
    abstract findByGender(gender: string): T[];

    /**
     * Implementación del método para contar los elementos de una colección de objetos
     * @returns 
     */
    countElements(): number {
        return this.collection.length;
    }

    /**
     * Implementación del método para añadir un elemento a la colección
     * @param element 
     */
    pushElement(element: T): void {
        this.collection.push(element);
    }

}
```

A continuación, se definieron tres clases concretas para representar los tres tipos de colecciones que se piden desarrollar, _Serie_, _Película_ y _Documental_, en ellas se han instanciado cuatro atríbutos privados; _nombre_, _género_, _año_ y _duration/numero de seasons_, asimismo se implementaron un método getter para cada atributo para tener acceso a ellos:

``` ts
export class Serie {
    private _title: string;
    private _year: number;
    private _gender: string;
    private _seasons: number;

    /**
     * __Constrcutor de la clase Series__
     * @param title -- Título de la serie
     * @param year -- Año de estreno
     * @param gender -- Género de la serie
     * @param seasons -- Número de temporadas
     */
    constructor (title: string, year: number, gender: string, seasons: number) {
        this._title = title;
        this._year = year;
        this._gender = gender;
        this._seasons = seasons;
    }

    /**
     * Método para obtener el título de la serie
     * @returns -- Título de la serie
     */
    public getTitle(): string {
        return this._title;
    }

    /**
     * Método para obtener el año de estreno de la serie
     * @returns -- Año de estreno
     */
    public getYear(): number {
        return this._year;
    }

    /**
     * Método para obtener el género de la serie
     * @returns -- Género de la serie
     */
    public getGender(): string {
        return this._gender;
    }

    /**
     * Método para obtener el número de temporadas de la serie
     * @returns -- Número de temporadas
     */
    public getSeasons(): number {
        return this._seasons;
    }
}

export class Film {
    private _title: string;
    private _year: number;
    private _gender: string;
    private _duration: number;

    /**
     * __Constrcutor de la clase Film__
     * @param title -- Título de la película
     * @param year -- Año de estreno
     * @param gender -- Género de la película
     * @param duration -- Tiempo de duración de la película
     */
    constructor (title: string, year: number, gender: string, duration: number) {
        this._title = title;
        this._year = year;
        this._gender = gender;
        this._duration = duration;
    }

    /**
     * Método para obtener el título de la película
     * @returns -- Título de la película
     */
    public getTitle(): string {
        return this._title;
    }

    /**
     * Método para obtener el año de estreno de la película
     * @returns -- Año de estreno
     */
    public getYear(): number {
        return this._year;
    }

    /**
     * Método para obtener el género de la película
     * @returns -- Género de la película
     */
    public getGender(): string {
        return this._gender;
    }

    /**
     * Método para obtener el tiempo de duración de la película
     * @returns -- Tiempo de duración de la película
     */
    public getDuration(): number {
        return this._duration;
    }
}

export class Documentary {
    private _title: string;
    private _year: number;
    private _gender: string;
    private _duration: number;

    /**
     * __Constrcutor de la clase Documentary__
     * @param title -- Título del documental
     * @param year -- Año de estreno del documental
     * @param gender -- Género del documental
     * @param duration -- Tiempo de duración del documental
     */
    constructor (title: string, year: number, gender: string, duration: number) {
        this._title = title;
        this._year = year;
        this._gender = gender;
        this._duration = duration;
    }

    /**
     * Método para obtener el título del documental
     * @returns -- Título del documental
     */
    public getTitle(): string {
        return this._title;
    }

    /**
     * Método para obtener el año de estreno del documental
     * @returns -- Año de estreno del documental
     */
    public getYear(): number {
        return this._year;
    }

    /**
     * Método para obtener el género del documental
     * @returns -- Género del documental
     */
    public getGender(): string {
        return this._gender;
    }

    /**
     * Método para obtener la duración del documental
     * @returns -- Tiempo de duración del documental
     */
    public getDuration(): number {
        return this._duration;
    }
}
```

Finalmente se desarrollaron otras tres clases que extienden la clase _BasicStreamableCollection_, representando a las colecciones de las tres clases recien explicadas y que implementan los métodos definidos en la clase _BasicStreamableCollection_. 

``` ts
export class SerieCollection extends BasicStreamableCollection<Serie> {

    /**
     * __Constructor de la clase SerieCollection__
     * @param collection -- Colección de series
     */
    constructor (collection: Serie[]) {
        super(collection);
    }

    /**
     * Implementación del método para buscar un elemento por su año de estreno
     * @param year -- Año de estreno
     * @returns -- Colección de series que coincidan con el año de estreno pasado por parámetro
     */
    findByYear(year: number): Serie[] {
        return this.collection.filter((serie) => serie.getYear() === year);
    }

    /**
     * Método extendido de la clase BasicStreamableCollection para saber si un una serie existe en nuestra colleción de series
     * @param title -- Título de la serie
     * @returns -- Booleano que indica si la serie existe o no en nuestra coleción
     */
    findByTitle(title: string): boolean {
        let returnedValue = false;
        this.collection.forEach((serie) => {
            if (serie.getTitle() === title) {
               returnedValue = true; 
            }
        });
        if (returnedValue) {
            return true;
        } 
        return false;
    }

    /**
     * Método extendido de la clase BasicStreamableCollection para buscar un elemento por su género 
     * @param gender -- Género de la serie
     * @returns -- Colección de series que coincidan con el género pasado por parámetro
     */
    findByGender(gender: string): Serie[] {
        return this.collection.filter((serie) => serie.getGender() === gender);
    }
    
    /**
     * Método para obtener la colección de series
     * @returns -- Colección de series
     */
    public getCollection(): Serie[] {
        return this.collection;
    }

    /**
     * Método para obtener el número de temporadas de una serie concreta, identificandola por su título
     * @param title -- Título de la serie
     * @returns -- Número de temporadas de la serie
     */
    public getNumOfSeasons(title: string): number {
        let seasons = 0;
        this.collection.forEach((serie) => {
            if (serie.getTitle() === title) {
                seasons = serie.getSeasons();
            }
        });
        return seasons;
    }
}

export class FilmCollection extends BasicStreamableCollection<Film> {

    /**
     * __Constructor de la clase FilmCollection__
     * @param collection -- Colección de películas
     */
    constructor (collection: Film[]) {
        super(collection);
    }

    /**
     * Implementación del método para buscar un elemento por su año de estreno
     * @param year -- Año de estreno
     * @returns -- Colección de películas que coincidan con el año de estreno pasado por parámetro
     */
    findByYear(year: number): Film[] {
        return this.collection.filter((peli) => peli.getYear() === year);
    }

    /**
     * Método extendido de la clase BasicStreamableCollection para saber si una película existe en nuestra colleción de pelis
     * @param title -- Título de la película
     * @returns -- Booleano que indica si la película existe o no en nuestra colección
     */
    findByTitle(title: string): boolean {
        let found = false;
        this.collection.forEach((peli) => {
            if (peli.getTitle() === title) {
                found = true;
            }
        });
        if (found) {
            return true;
        }
        return false;
    }

    /**
     * Método extendido de la clase BasicStreamableCollection para buscar un elemento por su género 
     * @param gender -- Género de la película
     * @returns -- Colección de pelis que coincidan con el género pasado por parámetro
     */
    findByGender(gender: string): Film[] {
        return this.collection.filter((peli) => peli.getGender() === gender);
    }
    
    /**
     * Método para obtener la colección de películas
     * @returns -- Colección de pelis
     */
    public getCollection(): Film[] {
        return this.collection;
    }

    /**
     * Pasado un título de película como parametro de la función, 
     * devuelve la duración de la misma buscando en la colección de 
     * películas la película con dicho título.
     * @param title -- Título de la película
     * @returns -- Duración de la película
     */
    public getTimeOfFilm(title: string): number {
        let time = 0;
        this.collection.forEach((peli) => {
            if (peli.getTitle() === title) {
                time = peli.getDuration();
            }
        });
        return time;
    }
}

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {

    /**
     * __Constructor de la clase DocumentaryCollection__
     * @param collection -- Colección de documentales
     */
    constructor (collection: Documentary[]) {
        super(collection);
    }

    /**
     * Implementación del método para buscar un elemento por su año de estreno
     * @param year -- Año de estreno
     * @returns -- Colección de documentales que coincidan con el año de estreno pasado por parámetro
     */
    findByYear(year: number): Documentary[] {
        return this.collection.filter((doc) => doc.getYear() === year);
    }

    /**
     * Método extendido de la clase BasicStreamableCollection para saber si un documental existe en nuestra colleción de documentales
     * @param title -- Título del documental
     * @returns -- Booleano que indica si el documental existe o no en nuestra colección
     */
    findByTitle(title: string): boolean {
        let found = false;
        this.collection.forEach((doc) => {
            if (doc.getTitle() === title) {
                found = true;
            }
        });
        if (found) {
            return true;
        }
        return false;
    }

    /**
     * Método extendido de la clase BasicStreamableCollection para buscar un elemento por su género 
     * @param gender -- Género del documental
     * @returns -- Colección de documentales que coincidan con el género pasado por parámetro
     */
    findByGender(gender: string): Documentary[] {
        return this.collection.filter((doc) => doc.getGender() === gender);
    }
    
    /**
     * Método para obtener la colección de documentales
     * @returns -- Colección de documentales
     */
    public getCollection(): Documentary[] {
        return this.collection;
    }

    /**
     * Pasado un título de un documental como parametro de la función, 
     * devuelve la duración del mismo buscando en la colección el documental con dicho título.
     * @param title -- Título del documental
     * @returns -- Duración del documental
     */
    public getTimeOfFilm(title: string): number {
        let time = 0;
        this.collection.forEach((doc) => {
            if (doc.getTitle() === title) {
                time = doc.getDuration();
            }
        });
        return time;
    }
}
```

- __Difucultades__

La mayor dificultad en este ejercicio ha sido entender el enunciado, lo dejé para el final para dedicarle mas tiempo sin tener la presión de tener que realizar los siguientes ejercicios. 

Fue de gran ayuda la sesión PE del pasado lunes en la que se nos solicitó realizar un ejercicio con la misma dinámica que este. 

### __Ejercicio 2. Implementación de una clase lista y sus operaciones:__ 

- __Enuncido:__

Se procede a adjuntar el enunciado de la práctica proporcionado por el profesorado:

En este ejercicio tendrá que implementar una clase genérica que modele una lista de elementos de cualquier tipo y sus operaciones sin hacer uso de ninguna de las funcionlidades proporcionadas por Array.prototype. Se permite, sin embargo, el uso de [].

Deberá incluir, al menos, las siguientes operaciones para trabajar con su lista:

- Método _append_, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.

- Método _concatenate_, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.

- Método _filter_, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.

- Método _length_, que devuelve el número de elementos de la lista.

- Método _map_, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.

- Método _reduce_, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.

- Método _reverse_, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.

- Método _forEach_, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.

Instancie diferentes listas que contengan elementos de diferentes tipos y lleve a cabo pruebas suficientes con cada una de las listas definidas para comprobar la generalidad de la clase diseñada.

- __Solución propuesta:__

Para resolver este ejercicio se ha implementado una clase genérica denominada _Lista_ que contiene como único atributo una listra de __T__.  

A continuación, se explicarán cada una de las operaciones incluidas en la clase _lista_

  0. _PUSH-ITEM_

  Se ha desarrollado un método adicional para facilitar el trabajo de los métodos posteriores donde se requiera insertar un elemento en la colección.  

  1. _Append:_
  
  En este método se declara una variable que se inicializa con la suma de las longitudes del objeto lista de la clase y de la array que se quiere insertar. Posteriormente se van recorriendo todos los elementos de la lista pasada como parámetro e insertando cada uno de ellos en nuestra lista.

  2. _Concatenate:_

  Para resolver este ejercicio haremos uso del método _append_ explicado antetiormente. Le pasamos una nueva lista como parámetro al método, recorremos cada elemento de la lista y llamamos al método _append_ insertando cada valor dentro de la lista.

  3. _Filter:_

  A este método se le pasa una función como parametro, recorremos cada elemento de nuestro objeto _lista_ y si se cumple la funcion para cada elemento lo insertamos en una nueva lista que retornaremos posteriormente haciendo uso del método _append_.

  4. _Length:_ 

  Se solicita que este método devuelva el valor de nuestro objeto _lista_ para ello establecemos una variable contador inicializada en 0, recorremos cada elemento de la lista y por cada elemento incrementamos el contador en uno, finalmente retornamos el contador. 

  5. _map:_

  El método map recibe como parametro una function, y retorna una nueva lista con cada elemento de nuestro objeto _lista_ modificado por la función pasada como parámetro.

  6. _reduce:_

  Este método recibe un acumulador y un callback y reduce cada elemento de la lista a un unico valor utilizando la función. 

  7. _Reverse:_

  Se recorre la lista de derecha a izquierda y se almacenan los valores en una nueva lista que finalmente es retornada.

  8. _ForEach:_

  Itera sobre los elementos de la lista
  e invoca la funcion pasada como argumento para cada uno de ellos. 

- __Algoritmo/Funciones utilizadas:__

```ts 
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
   * Metodo push para añadir elementos a la lista
   * @param item 
   */
  public PUSH_ITEM(item: T): void {
    this.lista[this.length()] = item;
  }

  /**
   * Metodo para añadir los elementos de una lista en otra
   * @param array 
   */
  public append(array: Lista<T>): void {
    // instanciamos un valor como la longitud de la primera lista +
    // el tamaño de la segunda lista, este deberia ser el tamaño de la nueva lista
    const counter = this.length() + array.length();
    let j = 0;
    for (let i = this.length(); i < counter; i++) {
      this.lista[i] = array.getList()[j];
      j++;
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
        listaFiltrada.PUSH_ITEM(item);
      }
    }
    return listaFiltrada
  }

  /**
   * Método publico que te devuelve la longitud de la lista
   * @returns 
   */
  public length(): number {
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
      listaMap.PUSH_ITEM(funct(item));
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
    for (let i = this.length() - 1; i >= 0; i--) {
      listaReversa.PUSH_ITEM(this.lista[i]);
    }
    return listaReversa;
  }

  /**
   * Metodo que replica el funcionamiento de forEach de array.prototype
   * Dado una lista (la de nuestra clase) y una funcion, itera sobre los elementos de la lista
   * e invoca la funcion pasada como argumento para cada uno de ellos 
   * @param function_ --> funcion que se va a ejecutar en cada elemento de la lista
   */
  public forEach(function_: (item: T) => void) {
    for (const item of this.lista) {
      function_(item);
    }
  }
  
}
```

- __Difucultades__

La mayor dificultad del ejercicio residía en implementar los metodos solicitados sin hacer uso a las funcionalidades proporcionadas por Array.Protoype.

Se han tomado medidas para evitar el uso de dichas funcionalidades, como el desarrollo de un metodo _PUSH-ITEMS_ que simula el comportamiento del push del __array.prototype__.

### __Ejercicio 3. Ampliando la biblioteca musical:__ 

- __Enuncido:__

Se nos ha pedido ampliar la clase _bibliotecaMusical_ desarrollada en la práctica 5 de la asignatura. En esta ocasión se ha solicitado implementar una nueva clase _Single_ que se diferencia de kla clase _disco_ porque en lugar de tener una colección de canciones contiene una única canción o varias versiones de esta.

Además, se deberá modificar la clase discografía para que sea genérica.

- __Solución propuesta:__

Por temas de simplicidad, en lugar de escribir todo el código del ejercicio mostraré solamente los cambios y adiciones realizados para esta ampliación de la clase.

Asimismo, anotar que uno de los errores corregidos por Eduardo de la práctica anterior era la carencia de la clase discografía, tal y como entendí yo la práctica anterior no requeria implementarla. Así pues la he declarado en esta ocasión para cumplir con los requisitos del ejercicio.

En primer lugar, en cuando a la clase _single_ mencionar que es similar a la clase _disco_, sin enmbargo solamente almacena una canción y una o varias versiones de esta, así como el resto de atributos comunes con la otra clase. 

Además se han implementado numerosos _getters_ para acceder tanto a los atributos de la clase como a elementos esenciales de la clase _Cancion_ necesarios para usarlos posteriormente.

Tal y como se puede ver a continuación:

``` ts
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
```

Como he mencionado anteriormente, no tenía implementada la clase _Discografía_, en la clase Artista instanciaba un atributo denominado Discografía, cuyo tipo era una colección de Discos, en esta ocasión he instanciado la clase tal y como se solicita en el enunciado:

```ts
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
```
Se solicitó que esta clase fuese genérica tal y como se puede ver en el código anterior, además se pide la discografía sea un recipiente de Discos, Singles o ambos a la vez, para esto se extendió el tipo genérico a una unión de tipos de objetos _Disco_ o _Single_.

- __Difucultades__

Por falta de tiempo no he podido cambiar la clase para que cumple con los principios SOLID, en futuras entregas tratare de organizarme mejor para poder cumplimentar con todos los requisitos de la práctica.

### __Ejercicio PE102: Clase Arithmeticable... __ 

- __Enuncido:__

En la sesión del laboratorio PE102 se nos ha solicitado realizar las siguientes clases e interfaces:

  1. Diseñe una interfaz genérica 'Arithmeticable', que defina los siguientes métodos con los que debería contar una clase que implemente dicha interfaz genérica: add, substract, multiply, divide.

  2. Diseñe una clase genérica 'ArithmeticableCollection' cuyo parámetro de tipo genérico 'T' se encuentre restringido a la forma definida por la interfaz 'Arithmeticable'. Dicha clase genérica deberá contar, al menos, con los métodos 'addArithmeticable' (añadir un elemento a la colección), 'getArithmeticable' (obtener un elemento de la colección) y 'getNumberOfArithmeticables' (obtener el tamaño de la colección), además de con un array de elementos cuyo tipo sea T.

  3. Diseñe una clase 'Complex' y otra clase 'Rational' que implementen la interfaz 'Arithmeticable'.

  4. Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de las clases 'Complex' y 'Rational' y demuestre su correcto funcionamiento.

  5. Trate de respetar los principios SOLID en su diseño de clases e interfaces.

- __Solución propuesta:__

Para resolver este ejercicio en primer lugar, se ha desarrollado una interfaz Arithmeticable que defina los métodos correspondientes a las cuatro operaciones aritméticas básicas (suma,resta,división y multiplicación).

```ts
export interface Arithmeticable<T> {
    add(operando1: T): T
    substract(operando1: T): T
    divide(operando1: T): T
    multiply(operando1: T): T
  }
```

Posteriormente se desarrolló una clase genérica denominada _ArithmeticableCollection_, donde el tipo genérico de la misma se ve extendido por la interfaz recién mencionada y se implementaron los métodos que se solicitan en el guión.

```ts
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
```

Finalmente se crearon las dos clases concretas _Complex_ y _Rational_ representando numeros complejos y racionales respectivamente.

En estas clases se implementaron los métodos declarados en la interfaz _Arithmeticable_ realizando las operaciones aritméticas básicas para cada tipo de número. Se hizo uso de Wikipedia para poder realizar las operaciones de numeros [complejos](https://es.wikipedia.org/wiki/N%C3%BAmero_complejo) y [racionales](https://es.wikipedia.org/wiki/N%C3%BAmero_racional).

El resultado ha sido el siguiente:

``` ts
export class Complex implements Arithmeticable<Complex> {
  private _real: number
  private _imaginary: number

  /**
   * Constructor de la clase Complex
   * @param real 
   * @param imaginary 
   */
  constructor(real: number, imaginary: number) {
    this._real = real
    this._imaginary = imaginary
  }

  /**
   * Metodo para obtener la parte real del numero complejo
   * @returns 
   */
  public getRealNumbER(): number {
    return this._real
  }

  /**
   * Metodo para obtener la parte imaginaria del numero complejo
   * @returns 
   */
  public getImaginaryNumber(): number {
    return this._imaginary
  }

  /**
   * Metodo para sumar dos numeros complejos
   * @param operando 
   * @returns 
   */
  add (operando: Complex): Complex {
    const result1 = this._real + operando.getRealNumbER();
    const result2 = this._imaginary + operando.getImaginaryNumber();
    const result = new Complex(result1, result2);
    return result;
  }

  /**
   * Metodo para restar dos numeros complejos
   * @param operando 
   * @returns 
   */
  substract (operando: Complex): Complex {
    const result1 = this._real - operando.getRealNumbER();
    const result2 = this._imaginary - operando.getImaginaryNumber();
    const result = new Complex(result1, result2);
    return result;
  }

  /**
   * Metodo para dividir dos numeros complejos
   * @param operando 
   * @returns 
   */
  divide (operando: Complex): Complex {
    const result1 = ((this._real * operando.getRealNumbER()) + (this._imaginary * operando.getImaginaryNumber())) / (Math.pow(this._imaginary,2) + Math.pow(operando.getImaginaryNumber(),2))
    const result2 =  ((this._imaginary * operando.getRealNumbER()) - (this._real * operando.getImaginaryNumber()))/ (Math.pow(this._imaginary,2) + Math.pow(operando.getImaginaryNumber(),2))
    const result = new Complex(result1, result2);
    return result
  }


  /**
   * Metodo para multiplicar dos numeros complejos
   * @param operando 
   * @returns 
   */
  multiply (operando: Complex): Complex {
    const result1 = (this._real * operando.getRealNumbER()) - (this._imaginary * operando.getImaginaryNumber());
    const result2 = (this._real * operando.getImaginaryNumber()) + (this._imaginary * operando.getRealNumbER());
    const result = new Complex(result1, result2);
    return result
  }

}
```

``` ts
export class Rational implements Arithmeticable<Rational> {
  private _numerator: number
  private _denominator: number

  /**
   * Constructor de la clase Rational
   * @param numerator 
   * @param denominator 
   */
  constructor(numerator: number, denominator: number) {
    this._numerator = numerator
    this._denominator = denominator
  }

  /**
   * Metodo para obtener el numerador
   * @returns 
   */
  public getNumerator(): number {
    return this._numerator
  }

  /**
   * Metodo para obtener el denominador
   * @returns 
   */
  public getDenominator(): number {
    return this._denominator
  }

  /**
   * Metodo para sumar dos numeros racionales
   * @param operando 
   * @returns 
   */
  add(operando: Rational): Rational{
    return new Rational(
      this._numerator * operando.getDenominator() + operando.getNumerator() * this._denominator,
      this._denominator * operando.getDenominator()
    )
  }

  /**
   * Metodo para restar dos numeros racionales
   * @param operando 
   * @returns 
   */
  substract(operando: Rational): Rational{
    return new Rational(
      this._numerator * operando.getDenominator() - operando.getNumerator() * this._denominator,
      this._denominator * operando.getDenominator()
    )
  }

  /**
   * Metodo para dividir dos numeros racionales
   * @param operando 
   * @returns 
   */
  divide(operando: Rational): Rational{
    return new Rational(
      this._numerator * operando.getDenominator(),
      this._denominator * operando.getNumerator()
    )
  }

  /**
   * Metodo para multiplicar dos numeros racionales
   * @param operando 
   * @returns 
   */
  multiply(operando: Rational): Rational{
    return new Rational(
      this._numerator * operando.getNumerator(),
      this._denominator * operando.getDenominator()
    )
  }
}
```



- __Difucultades__

El tiempo jugó una mala pasada, pero a diferencia de otras sesiones PE se puedo finalizar con éxito el ejercicio a tiempo.

## __Dificultades/Reflexión

Por falta de tiempo no he podido dejar el programa todo lo perfecto que me gustaría, no se cumplen mucho de los principios SOLID, sobretodo en el tercer y último ejercicio de los tres propuestos por el profesorado.

Considero que los otros dos si que cumplen con dichos principios, pero es posible que se me haya pasado algo.

Por otro lado, siguiendo el feedback en la correción de la práctica anterior he evitado errores que cometía anteriormente, como por ejemplo no tener una estructura de ficheros en los tests que replique la estructura de los ficheros de código alojados en _./src_.

Aún se comenten demasiados errores en estas prácticas, pero poco a poco voy progresando y corriegiendo errores para dejar la entrega lo mejor posible.

## Referencias

[Perfil de Github](https://github.com/Adrian-glz01)

[Guion de la práctica 6](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)

[Apuntes Tema6: Objetos, clases e interfaces](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-objects-classes-interfaces.html)

[Apuntes Tema7: Clases e interfaces genéricas](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-generics.html)

[Principios SOLID](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-solid.html)
