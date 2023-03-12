import 'mocha';
import { expect } from 'chai'
import {ArithmeticalCollection} from '../src/ejercicio-pe102/arithmeticalCollectionClass'
import {Complex} from '../src/ejercicio-pe102/complexClass'

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