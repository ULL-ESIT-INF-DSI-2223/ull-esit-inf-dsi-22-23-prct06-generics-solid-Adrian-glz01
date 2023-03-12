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