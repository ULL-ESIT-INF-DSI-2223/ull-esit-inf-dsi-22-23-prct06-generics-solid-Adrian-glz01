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