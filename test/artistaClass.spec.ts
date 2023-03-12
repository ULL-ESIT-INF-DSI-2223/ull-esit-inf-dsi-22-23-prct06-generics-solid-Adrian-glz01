import 'mocha';
import { expect } from 'chai';
import { Cancion } from "../src/ejercicio-3/cancionClass";
import { Disco } from "../src/ejercicio-3/discoClass";
import { Single } from "../src/ejercicio-3/singleClass";
import { Discografia } from "../src/ejercicio-3/discografiaClass";
import { Artista } from "../src/ejercicio-3/artistaClass";

const C1 = new Cancion("C1", 300, "Rock", true, 1000);
const C2 = new Cancion("C2", 320, "Metal", false, 200);
const C3 = new Cancion("C3", 280, "Reggae", true, 30000);
const C4 = new Cancion("C4", 150, "Pop", false, 400);
const C5 = new Cancion("C5", 400, "Electro", true, 600100);
const C6 = new Cancion("C6", 300, "Rock", false, 20);
const C7 = new Cancion("C7", 320, "Metal", true, 300);
const C8 = new Cancion("C8", 280, "Reggae", false, 40000);
const C9 = new Cancion("C9", 150, "Pop", true, 500);
const C10 = new Cancion("C10", 400, "Electro", false, 600200);
const C11 = new Cancion("C11", 300, "Rock", true, 1000);
const C12 = new Cancion("C12", 320, "Metal", false, 200);
const C13 = new Cancion("C13", 280, "Reggae", true, 30000);
const C14 = new Cancion("C14", 150, "Pop", false, 400);
const C15 = new Cancion("C15", 400, "ElectroRap", true, 20000); 
const C16 = new Cancion("C16", 300, "Rock", false, 20);
const C17 = new Cancion("C17", 320, "Metal", true, 300);
const C18 = new Cancion("C18", 280, "Reggae", false, 40000);

const D1 = new Disco("D1", 2020, [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10]);
const D2 = new Disco("D2", 2020, [C11, C12, C13, C14, C15, C16, C17, C18]);
const D3 = new Disco("D3", 2020, [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18]);
const D4 = new Disco("D4", 2020, [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18]);

const S1 = new Single("S1", 2020, C1, "Version1");
const S2 = new Single("S2", 2020, C2, ["Version1", "Version2"]);
const S3 = new Single("S3", 2020, C3, ["Version1", "Version2", "Version3"]);
const S4 = new Single("S4", 2020, C4, "Version1");

const DIS1 = new Discografia([D1, D2, D3, D4]);
const DIS3 = new Discografia([D1, D2, D3, D4, S1, S2, S3, S4]);

const A1 = new Artista("A1", 1000, DIS3); 
const A2 = new Artista("A2", 2000, DIS1);


describe('Test de la clase Artista', () => {
  it ('A1.getNumOfSongsInSelectedDisk(D1) debe devolver 10', () => {
    expect(A1.getNumOfSongsInSelectedDisk('D1')).to.be.equal(10);
  });
  it ('A1.getTImeOfSongsInSelectedDisk(D1) debe devolver 2900', () => {
    expect(A1.getTimeOfSongsInSelectedDisk('D1')).to.be.equal(2900);
  });
  it ('A1.getDiskReproductions(D1) debe devolver 1272720', () => {
    expect(A1.getDiskReproductions('D1')).to.be.equal(1272720);
  });
  it ('A1.getDiskReproductions(S1) debe devolver 1', () => {
    expect(A1.getNumOfSongsInSelectedDisk('S1')).to.be.equal(1);
  });
  it ('A1.getDiskReproductions(S1) debe devolver 300', () => {
    expect(A1.getTimeOfSongsInSelectedDisk('S1')).to.be.equal(300);
  });
  it ('A1.getDiskReproductions(S1) debe devolver 1000', () => {
    expect(A1.getDiskReproductions('S1')).to.be.equal(1000);
  });
  it ('A1.getElementOfDisk([D1,D2,D3,D4]) debe devolver [D1,D2,D3,D4]', () => {
    expect(A1.getElementOfDisks([D1,D2,D3,D4])).to.be.equal('D1 D2 D3 D4 ');
  });
  it ('A2.getElementOfDisks(S1) debe devolver 1', () => {
    expect(A2.getElementOfDisks(S1)).to.be.equal('S1');
  });
});

