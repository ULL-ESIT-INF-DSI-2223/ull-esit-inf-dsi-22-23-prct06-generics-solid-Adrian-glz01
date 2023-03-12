import { BasicStreamableCollection } from "./basicsStreamableCollectionClass";
import { Documentary } from "./documentaryClass";

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