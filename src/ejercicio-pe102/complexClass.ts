import { Arithmeticable } from "./arithmeticableInterface";

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
