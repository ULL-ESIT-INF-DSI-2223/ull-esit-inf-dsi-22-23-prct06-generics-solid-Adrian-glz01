import 'mocha';
import { expect } from 'chai';
import { Cancion } from "../src/ejercicio-3/cancionClass";
import { Disco } from "../src/ejercicio-3/discoClass";

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

describe('Disco class tests', () => {
  it ('D1.getsongs should return [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10]' , () => {
    expect(D1.getSongs()).to.be.eql([C1, C2, C3, C4, C5, C6, C7, C8, C9, C10]);
  });
  it ('D2.getSongs should return [C11, C12, C13, C14, C15, C16, C17, C18]' , () => {
    expect(D2.getSongs()).to.be.eql([C11, C12, C13, C14, C15, C16, C17, C18]);
  });
  it ('D3.getSongs should return [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18]' , () => {
    expect(D3.getSongs()).to.be.eql([C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18]);
  });
  it ('D4.getSongs should return [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18]' , () => {
    expect(D4.getSongs()).to.be.eql([C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18]);
  });
  it ('D1.getNumSongs should return 10' , () => {
    expect(D1.getNumberOfSongs()).to.be.equal(10);
  });
  it ('D2.getNumSongs should return 8' , () => {
    expect(D2.getNumberOfSongs()).to.be.equal(8);
  });
  it ('D3.getNumSongs should return 18' , () => {
    expect(D3.getNumberOfSongs()).to.be.equal(18);
  });
  it ('D4.getNumSongs should return 18' , () => {
    expect(D4.getNumberOfSongs()).to.be.equal(18);
  });
  it ('D1.getTimeOfSongsInDisk should return 2900' , () => {
    expect(D1.getTimeOfSongsInDisk()).to.be.equal(2900);
  });
  it ('D2.getTimeOfSongsInDisk should return 2350' , () => {
    expect(D2.getTimeOfSongsInDisk()).to.be.equal(2350);
  });
  it ('D3.getTimeOfSongsInDisk should return 5250' , () => {
    expect(D3.getTimeOfSongsInDisk()).to.be.equal(5250);
  });
  it ('D4.getTimeOfSongsInDisk should return 5250' , () => {
    expect(D4.getTimeOfSongsInDisk()).to.be.equal(5250);
  });
  it ('D1.getNumOfReproductions should return 1272720' , () => {
    expect(D1.getNumOfReproductions()).to.be.equal(1272720);
  });
  it ('D2.getNumOfReproductions should return 91920' , () => {
    expect(D2.getNumOfReproductions()).to.be.equal(91920);
  });
  it ('D3.getNumOfReproductions should return 1364640' , () => {
    expect(D3.getNumOfReproductions()).to.be.equal(1364640);
  });
  it ('D4.getNumOfReproductions should return 1364640' , () => {
    expect(D4.getNumOfReproductions()).to.be.equal(1364640);
  });
  it ('D1.getDusciStr should return "DISC_: D1, 2020, [ C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 ]"' , () => {
    expect(D1.getDiscoStr('D1')).to.be.equal("DISC_: D1, 2020, [ C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 ]");
  });
  it ('D2.getDusciStr should return "DISC_: D2, 2020, [ C11 C12 C13 C14 C15 C16 C17 C18 ]"' , () => {
    expect(D2.getDiscoStr('D2')).to.be.equal("DISC_: D2, 2020, [ C11 C12 C13 C14 C15 C16 C17 C18 ]");
  });
  it ('D3.getDusciStr should return "DISC_: D3, 2020, [ C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11 C12 C13 C14 C15 C16 C17 C18 ]"' , () => {
    expect(D3.getDiscoStr('D3')).to.be.equal("DISC_: D3, 2020, [ C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11 C12 C13 C14 C15 C16 C17 C18 ]");
  });
  it ('D4.getDusciStr should return "DISC_: D4, 2020, [ C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11 C12 C13 C14 C15 C16 C17 C18 ]"' , () => {
    expect(D4.getDiscoStr('D4')).to.be.equal("DISC_: D4, 2020, [ C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11 C12 C13 C14 C15 C16 C17 C18 ]");
  });

});