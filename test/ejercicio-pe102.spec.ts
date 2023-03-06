import 'mocha';
import { expect } from 'chai'
import {Arithmeticable} from '../src/ejercicio-pe102'
import {ArithmeticalCollection} from '../src/ejercicio-pe102'
import {Rational} from '../src/ejercicio-pe102'
import { Complex } from '../src/ejercicio-pe102'

// pruebas para comprobar la funcionalidad de las clases y métodos

describe('Ejercicio PE102 --> CLASE RATIONAL', () => {
  const r1 = new Rational(1, 2)
  const r2 = new Rational(1, 3)
  const r3 = r1.add(r2)
  const r4 = r1.substract(r2)
  const r5 = r1.multiply(r2)
  const r6 = r1.divide(r2)
  const r7 = r1.add(r2)
  it('test de la clase Arithmeticable', () => {
    expect(r3.getNumerator()).to.be.eq(5)
    expect(r3.getDenominator()).to.be.eq(6)
    // realizamos operaciones
  });
  // comprobamos que los resultados son correctos
  it ('Prueba de la suma de la clase racional (1/2 + 1/3) ', () => {  
    expect(r7.getNumerator()).to.be.eq(5)
    expect(r7.getDenominator()).to.be.eq(6)
  });
  it ('Prueba de la resta de la clase racional (1/2 - 1/3) ', () => {
    expect(r4.getNumerator()).to.be.eq(1)
    expect(r4.getDenominator()).to.be.eq(6)
  });
  it ('Prueba de la multiplicación de la clase racional (1/2 * 1/3) ', () => {
    expect(r5.getNumerator()).to.be.eq(1)
    expect(r5.getDenominator()).to.be.eq(6)
  });
  it ('Prueba de la división de la clase racional (1/2 / 1/3) ', () => {
    expect(r6.getNumerator()).to.be.eq(3)
    expect(r6.getDenominator()).to.be.eq(2)
  });
});


// pruebas para comprobar la funcionalidad de la clase complex
describe('Ejercicio PE102 --> Clase complex:', () => {
  const c1 = new Complex(1, 2)
  const c2 = new Complex(1, 3)
  const c3 = c1.add(c2)
  const c4 = c1.substract(c2)
  const c5 = c1.divide(c2)
  const c6 = c1.multiply(c2)
  it('test de la clase Complex', () => {
    expect(c3.getRealNumbER()).to.be.eq(2)
    expect(c3.getImaginaryNumber()).to.be.eq(5)
  });
  it ('Prueba de la suma de la clase complex (1 + 2i + 1 + 3i) ', () => {
    expect(c3.getRealNumbER()).to.be.eq(2)
    expect(c3.getImaginaryNumber()).to.be.eq(5)
  });
  it ('Prueba de la resta de la clase complex (1 + 2i - 1 - 3i) ', () => {
    expect(c4.getRealNumbER()).to.be.eq(0)
    expect(c4.getImaginaryNumber()).to.be.eq(-1)
  });
  it ('Prueba de la división de la clase complex (1 + 2i / 1 + 3i) ', () => {
    expect(c5.getRealNumbER()).to.be.eq(0.5384615384615384)
    expect(c5.getImaginaryNumber()).to.be.eq(-0.07692307692307693)
  });
  it ('Prueba de la multiplicación de la clase complex (1 + 2i * 1 + 3i) ', () => {
    expect(c6.getRealNumbER()).to.be.eq(-5)
    expect(c6.getImaginaryNumber()).to.be.eq(5)
  });
});


// probar la clase arithmetical collection
describe('Ejercicio PE102 --> Clase arithmetical collection:', () => {
  const array = new ArithmeticalCollection<Complex>();
  const c1 = new Complex(1, 2)
  const c2 = new Complex(1, 3)
  const c3 = new Complex(1, 4)

  array.addArithmeticable(c1)
  array.addArithmeticable(c2)
  array.addArithmeticable(c3)

  it ('Prueba para el getArithmeticable de la clase arithmeticalColecction', () => {
    expect(array.getArithmeticable(0).getRealNumbER()).to.be.eq(1)
    expect(array.getArithmeticable(0).getImaginaryNumber()).to.be.eq(2)

    expect(array.getArithmeticable(1).getRealNumbER()).to.be.eq(1)
    expect(array.getArithmeticable(1).getImaginaryNumber()).to.be.eq(3)

    expect(array.getArithmeticable(2).getRealNumbER()).to.be.eq(1)
    expect(array.getArithmeticable(2).getImaginaryNumber()).to.be.eq(4)
  });

  it ('Prueba del getNumOfArithmeticables de la clase arithmeticalColecction', () => {
    expect(array.getNumbeOfArithmeticables()).to.be.eq(3)
  });
});
