import 'mocha'
import { expect } from 'chai'
import { Lista } from '../src/ejercicio-2/listaClass'

const listaNum1 = new Lista<number>();
const listaNum2 = new Lista<number>();
const listaNum3 = new Lista<number>();
const listaNum4 = new Lista<number>();

// 
listaNum1.PUSH_ITEM(1);
listaNum1.PUSH_ITEM(2);
listaNum1.PUSH_ITEM(3);
listaNum1.PUSH_ITEM(4);
listaNum2.PUSH_ITEM(5);
listaNum2.PUSH_ITEM(6);
listaNum2.PUSH_ITEM(7);
listaNum2.PUSH_ITEM(8);
listaNum3.PUSH_ITEM(9);
listaNum3.PUSH_ITEM(10);
listaNum3.PUSH_ITEM(11);
listaNum3.PUSH_ITEM(12);
listaNum3.PUSH_ITEM(13);
listaNum4.PUSH_ITEM(14);
listaNum4.PUSH_ITEM(15);
listaNum4.PUSH_ITEM(16);
listaNum4.PUSH_ITEM(17);
listaNum4.PUSH_ITEM(18);
listaNum4.PUSH_ITEM(19);
listaNum4.PUSH_ITEM(20);

const listaStr1 = new Lista<string>();
const listaStr2 = new Lista<string>();
const listaStr3 = new Lista<string>();

listaStr1.PUSH_ITEM("Hola");
listaStr1.PUSH_ITEM("que");
listaStr1.PUSH_ITEM("tal");
listaStr2.PUSH_ITEM("estas");
listaStr2.PUSH_ITEM("bien");
listaStr2.PUSH_ITEM("y");
listaStr3.PUSH_ITEM("tu");
listaStr3.PUSH_ITEM("como");
listaStr3.PUSH_ITEM("estas");

describe('Ejercicio 2: Tests de la clase Lista', () => {
  it('Test de la función getList()', () => {
    expect(listaNum1.getList()).to.be.eql([1, 2, 3, 4]);
    expect(listaNum2.getList()).to.be.eql([5, 6, 7, 8]);
    expect(listaNum3.getList()).to.be.eql([9, 10, 11, 12, 13]);
    expect(listaNum4.getList()).to.be.eql([14, 15, 16, 17, 18, 19, 20]);
    expect(listaStr1.getList()).to.be.eql(["Hola", "que", "tal"]);
    expect(listaStr2.getList()).to.be.eql(["estas", "bien", "y"]);
    expect(listaStr3.getList()).to.be.eql(["tu", "como", "estas"]);
  });
  it('Test del metodo concatenar: ', () => {
    listaNum1.concatenate([listaNum2, listaNum3, listaNum4]);
    listaStr1.concatenate([listaStr2, listaStr3]);
    expect(listaNum1.getList()).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(listaStr1.getList()).to.be.eql(["Hola", "que", "tal", "estas", "bien", "y", "tu", "como", "estas"]);
  });
  it('Test del metodo filter: ', () => {
    expect(listaNum1.filter((item: number) => item % 2 === 0).getList()).to.be.eql([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(listaStr1.filter((item: string) => item.length > 3).getList()).to.be.eql(["Hola","estas", "bien", "como", "estas"]);
  });
  it('Test del metodo lenght: ', () => {
    expect(listaNum1.length()).to.be.eql(20);
    expect(listaStr1.length()).to.be.eql(9);
  });
  it('Test del metodo map: ', () => {
    expect(listaNum1.map((item: number) => item * 2).getList()).to.be.eql([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]);
    expect(listaStr1.map((item: string) => item + " " + item).getList()).to.be.eql(["Hola Hola", "que que", "tal tal", "estas estas", "bien bien", "y y", "tu tu", "como como", "estas estas"]);
  });
  it('Test del metodo reduce: ', () => {
    expect(listaNum1.reduce(0, (acc: number, item: number) => acc + item)).to.be.eql(210);
    expect(listaStr1.reduce("", (acc: string, item: string) => acc + item)).to.be.eql("Holaquetalestasbienytucomoestas");
  });
  it('Test del metodo reverse: ', () => {
    expect(listaNum1.reverse().getList()).to.be.eql([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(listaStr1.reverse().getList()).to.be.eql(["estas", "como", "tu", "y", "bien", "estas", "tal", "que", "Hola"]);
  });
  it('Test del metodo forEach: ', () => {
    let suma = 0;
    listaNum1.forEach((item: number) => suma += item);
    expect(suma).to.be.eql(210);
    let concat = "";
    listaStr1.forEach((item: string) => concat += item);
    expect(concat).to.be.eql("Holaquetalestasbienytucomoestas");
  });
});
