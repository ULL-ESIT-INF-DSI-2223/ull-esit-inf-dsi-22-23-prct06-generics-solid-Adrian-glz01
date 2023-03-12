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