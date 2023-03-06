/**
 * Interfaz generica para operaciones aritmeticas
 */
export interface Arithmeticable<T> {
  add(operando1: T): T
  substract(operando1: T): T
  divide(operando1: T): T
  multiply(operando1: T): T
}

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

