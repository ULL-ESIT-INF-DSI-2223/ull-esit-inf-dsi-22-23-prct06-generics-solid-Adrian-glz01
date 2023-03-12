import { BasicStreamableCollection } from "./basicsStreamableCollectionClass";
import { Serie } from "./serieClass";

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