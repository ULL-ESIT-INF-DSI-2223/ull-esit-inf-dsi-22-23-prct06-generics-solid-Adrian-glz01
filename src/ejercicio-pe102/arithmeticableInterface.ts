/**
 * Interfaz generica para operaciones aritmeticas
 */
export interface Arithmeticable<T> {
    add(operando1: T): T
    substract(operando1: T): T
    divide(operando1: T): T
    multiply(operando1: T): T
  }