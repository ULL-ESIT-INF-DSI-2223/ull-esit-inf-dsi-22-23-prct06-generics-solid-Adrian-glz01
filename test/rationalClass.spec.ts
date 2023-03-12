import 'mocha';
import { expect } from 'chai'
import {Rational} from '../src/ejercicio-pe102/rationalClass'

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
  