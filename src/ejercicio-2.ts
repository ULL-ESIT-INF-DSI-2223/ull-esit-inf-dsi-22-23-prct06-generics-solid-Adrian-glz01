import { Lista } from "./ejercicio-2/listaClass";

const listaNum1 = new Lista<number>();
const listaNum2 = new Lista<number>();
const listaNum3 = new Lista<number>();
const listaNum4 = new Lista<number>();

listaNum1.append(1);
listaNum1.append(2);
listaNum1.append(3);
listaNum1.append(4);

console.log(listaNum1);
console.log(listaNum1.lenght());

listaNum2.append(5);
listaNum2.append(6);
listaNum2.append(7);
listaNum2.append(8);

console.log(listaNum2);
console.log(listaNum2.lenght());

listaNum3.append(9);
listaNum3.append(10);
listaNum3.append(11);
listaNum3.append(12);
listaNum3.append(13);

console.log(listaNum3);
console.log(listaNum3.lenght());

listaNum1.append(listaNum2);
console.log(listaNum1);

listaNum4.append(14);
listaNum4.append(15);
listaNum4.append(16);
listaNum4.append(17);
listaNum4.append(18);
listaNum4.append(19);
listaNum4.append(20);

const arrayListaNum: Lista<number>[] = [listaNum1, listaNum2, listaNum3, listaNum4];

const listaNum5 = new Lista<number>();
listaNum5.concatenate(arrayListaNum);
console.log("LISTA5 CONCATENADA")
console.log(listaNum5);

listaNum5.filter((item: number) => item % 2 === 0);
console.log("LISTA5 FILTRADA")
const listFIlterByOddNumbers = listaNum5.filter((item: number) => item % 2 === 0);
console.log(listFIlterByOddNumbers);

const listMap = listaNum5.map((item: number) => item * 2);
console.log("LISTA5 MAP")
console.log(listMap);

const listReduce = listaNum5.reduce(0, (acumulator: number, item: number) => acumulator + item);
console.log("LISTA5 REDUCE")
console.log(listReduce);

const listReverse = listaNum5.reverse();
console.log("LISTA5 REVERSE")
console.log(listReverse);

listaNum5.forEach((item: number) => console.log(item));

console.log("PASAMOS A LAS STRINGS")

const listaStr1 = new Lista<string>();
const listaStr2 = new Lista<string>();
const listaStr3 = new Lista<string>();

listaStr1.append("Hola");
listaStr1.append("que");
listaStr1.append("tal");

listaStr2.append("estas");
listaStr2.append("bien");
listaStr2.append("y");

listaStr3.append("tu");
listaStr3.append("como");
listaStr3.append("estas");

const arrayListaStr: Lista<string>[] = [listaStr1, listaStr2, listaStr3];

const listaStr4 = new Lista<string>();
listaStr4.concatenate(arrayListaStr);
console.log("LISTA4 CONCATENADA")
console.log(listaStr4);

listaStr4.filter((item: string) => item.length > 3);
console.log("LISTA4 FILTRADA")
const listFIlterByLongerThan3 = listaStr4.filter((item: string) => item.length > 3);
console.log(listFIlterByLongerThan3);

const listMapStr = listaStr4.map((item: string) => item + "!");
console.log("LISTA4 MAP")
console.log(listMapStr);

const listReduceStr = listaStr4.reduce("", (acumulator: string, item: string) => acumulator + item + " ");
console.log("LISTA4 REDUCE")
console.log(listReduceStr);

const listReverseStr = listaStr4.reverse();
console.log("LISTA4 REVERSE")
console.log(listReverseStr);

listaStr4.forEach((item: string) => console.log(item));

