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