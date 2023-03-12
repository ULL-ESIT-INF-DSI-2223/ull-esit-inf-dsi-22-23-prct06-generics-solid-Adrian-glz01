import 'mocha';
import { expect } from 'chai'
import { Complex } from '../src/ejercicio-pe102/complexClass'

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