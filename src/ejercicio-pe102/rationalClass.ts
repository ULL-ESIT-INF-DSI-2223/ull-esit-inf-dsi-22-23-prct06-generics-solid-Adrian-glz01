import { Arithmeticable } from "./arithmeticableInterface";

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