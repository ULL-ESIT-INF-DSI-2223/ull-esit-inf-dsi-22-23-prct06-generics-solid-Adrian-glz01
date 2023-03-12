import { BasicStreamableCollection } from "./basicsStreamableCollectionClass";
import { Film } from "./filmClass";

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