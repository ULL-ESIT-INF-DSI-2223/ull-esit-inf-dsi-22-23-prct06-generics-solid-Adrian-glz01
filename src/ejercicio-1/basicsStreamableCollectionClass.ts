import {StremeableFBY, StremeableFBT, StremeableFBG, StremeableCE, StremeablePE} from './strmeableInterface';

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


