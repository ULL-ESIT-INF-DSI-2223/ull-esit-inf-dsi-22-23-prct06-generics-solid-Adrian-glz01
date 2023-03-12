import 'mocha';
import { expect } from 'chai'
import { Cancion } from '../src/ejercicio-3/cancionClass'

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

describe('Ejercicio 3 --> Clase Cancion:', () => {
  it ('C1.getname debería devolver "C1"', () => {
    expect(C1.getTitle()).to.be.equal("C1");
  });
  it ('C1.getDuracion debería devolver 300', () => {
    expect(C1.getDuracion).to.be.equal(300);
  });
  it ('C1.getGenero debería devolver "Rock"', () => {
    expect(C1.genero).to.be.equal("Rock");
  });
  it ('C1.getEsFavorita debería devolver true', () => {
    expect(C1.single).to.be.equal(true);
  });
  it ('C1.getNumeroDeReproducciones debería devolver 1000', () => {
    expect(C1.getNumeroDeReproducciones()).to.be.equal(1000);
  });
  it ('C2.getname debería devolver "C2"', () => {
    expect(C2.getTitle()).to.be.equal("C2");
  });
  it ('C2.getDuracion debería devolver 320', () => {
    expect(C2.getDuracion).to.be.equal(320);
  });
  it ('C2.getGenero debería devolver "Metal"', () => {
    expect(C2.genero).to.be.equal("Metal");
  });
  it ('C2.getEsFavorita debería devolver false', () => {
    expect(C2.single).to.be.equal(false);
  });
  it ('C2.getNumeroDeReproducciones debería devolver 200', () => {
    expect(C2.getNumeroDeReproducciones()).to.be.equal(200);
  });
  it ('C3.getname debería devolver "C3"', () => {
    expect(C3.getTitle()).to.be.equal("C3");
  });
  it ('C3.getDuracion debería devolver 280', () => {
    expect(C3.getDuracion).to.be.equal(280);
  });
  it ('C3.getGenero debería devolver "Reggae"', () => {
    expect(C3.genero).to.be.equal("Reggae");
  });
  it ('C3.getEsFavorita debería devolver true', () => {
    expect(C3.single).to.be.equal(true);
  });
  it ('C3.getNumeroDeReproducciones debería devolver 30000', () => {
    expect(C3.getNumeroDeReproducciones()).to.be.equal(30000);
  });
  it ('C4.getname debería devolver "C4"', () => {
    expect(C4.getTitle()).to.be.equal("C4");
  });
  it ('C4.getDuracion debería devolver 150', () => {
    expect(C4.getDuracion).to.be.equal(150);
  });
  it ('C4.getGenero debería devolver "Pop"', () => {
    expect(C4.genero).to.be.equal("Pop");
  });
  it ('C4.getEsFavorita debería devolver false', () => {
    expect(C4.single).to.be.equal(false);
  });
  it ('C4.getNumeroDeReproducciones debería devolver 400', () => {
    expect(C4.getNumeroDeReproducciones()).to.be.equal(400);
  });
  it ('C5.getname debería devolver "C5"', () => {
    expect(C5.getTitle()).to.be.equal("C5");
  });
  it ('C5.getDuracion debería devolver 400', () => {
    expect(C5.getDuracion).to.be.equal(400);
  });
  it ('C5.getGenero debería devolver "Electro"', () => {
    expect(C5.genero).to.be.equal("Electro");
  });
  it ('C5.getEsFavorita debería devolver true', () => {
    expect(C5.single).to.be.equal(true);
  });
  it ('C5.getNumeroDeReproducciones debería devolver 600100', () => {
    expect(C5.getNumeroDeReproducciones()).to.be.equal(600100);
  });
  it ('C6.getname debería devolver "C6"', () => {
    expect(C6.getTitle()).to.be.equal("C6");
  });
  it ('C6.getDuracion debería devolver 300', () => {
    expect(C6.getDuracion).to.be.equal(300);
  });
  it ('C6.getGenero debería devolver "Rock"', () => {
    expect(C6.genero).to.be.equal("Rock");
  });
  it ('C6.getEsFavorita debería devolver false', () => {
    expect(C6.single).to.be.equal(false);
  });
  it ('C6.getNumeroDeReproducciones debería devolver 20', () => {
    expect(C6.getNumeroDeReproducciones()).to.be.equal(20);
  });
  it ('C7.getname debería devolver "C7"', () => {
    expect(C7.getTitle()).to.be.equal("C7");
  });
  it ('C7.getDuracion debería devolver 320', () => {
    expect(C7.getDuracion).to.be.equal(320);
  });
  it ('C7.getGenero debería devolver "Metal"', () => {
    expect(C7.genero).to.be.equal("Metal");
  });
  it ('C7.getEsFavorita debería devolver true', () => {
    expect(C7.single).to.be.equal(true);
  });
  it ('C7.getNumeroDeReproducciones debería devolver 300', () => {
    expect(C7.getNumeroDeReproducciones()).to.be.equal(300);
  });
  it ('C8.getname debería devolver "C8"', () => {
    expect(C8.getTitle()).to.be.equal("C8");
  });
  it ('C8.getDuracion debería devolver 280', () => {
    expect(C8.getDuracion).to.be.equal(280);
  });
  it ('C8.getGenero debería devolver "Reggae"', () => {
    expect(C8.genero).to.be.equal("Reggae");
  });
  it ('C8.getEsFavorita debería devolver false', () => {
    expect(C8.single).to.be.equal(false);
  });
  it ('C8.getNumeroDeReproducciones debería devolver 40000', () => {
    expect(C8.getNumeroDeReproducciones()).to.be.equal(40000);
  });
  it ('C9.getname debería devolver "C9"', () => {
    expect(C9.getTitle()).to.be.equal("C9");
  });
  it ('C9.getDuracion debería devolver 150', () => {
    expect(C9.getDuracion).to.be.equal(150);
  });
  it ('C9.getGenero debería devolver "Pop"', () => {
    expect(C9.genero).to.be.equal("Pop");
  });
  it ('C9.getEsFavorita debería devolver true', () => {
    expect(C9.single).to.be.equal(true);
  });
  it ('C9.getNumeroDeReproducciones debería devolver 500', () => {
    expect(C9.getNumeroDeReproducciones()).to.be.equal(500);
  });
  it ('C10.getname debería devolver "C10"', () => {
    expect(C10.getTitle()).to.be.equal("C10");
  });
  it ('C10.getDuracion debería devolver 400', () => {
    expect(C10.getDuracion).to.be.equal(400);
  });
  it ('C10.getGenero debería devolver "Electro"', () => {
    expect(C10.genero).to.be.equal("Electro");
  });
  it ('C10.getEsFavorita debería devolver false', () => {
    expect(C10.single).to.be.equal(false);
  });
  it ('C10.getNumeroDeReproducciones debería devolver 600200', () => {
    expect(C10.getNumeroDeReproducciones()).to.be.equal(600200);
  });
  it ('C11.getname debería devolver "C11"', () => {
    expect(C11.getTitle()).to.be.equal("C11");
  });
  it ('C11.getDuracion debería devolver 300', () => {
    expect(C11.getDuracion).to.be.equal(300);
  });
  it ('C11.getGenero debería devolver "Rock"', () => {
    expect(C11.genero).to.be.equal("Rock");
  });
  it ('C11.getEsFavorita debería devolver true', () => {
    expect(C11.single).to.be.equal(true);
  });
  it ('C11.getNumeroDeReproducciones debería devolver 1000', () => {
    expect(C11.getNumeroDeReproducciones()).to.be.equal(1000);
  });
  it ('C12.getname debería devolver "C12"', () => {
    expect(C12.getTitle()).to.be.equal("C12");
  });
  it ('C12.getDuracion debería devolver 320', () => {
    expect(C12.getDuracion).to.be.equal(320);
  });
  it ('C12.getGenero debería devolver "Metal"', () => {
    expect(C12.genero).to.be.equal("Metal");
  });
  it ('C12.getEsFavorita debería devolver false', () => {
    expect(C12.single).to.be.equal(false);
  });
  it ('C12.getNumeroDeReproducciones debería devolver 200', () => {
    expect(C12.getNumeroDeReproducciones()).to.be.equal(200);
  });
  it ('C13.getname debería devolver "C13"', () => {
    expect(C13.getTitle()).to.be.equal("C13");
  });
  it ('C13.getDuracion debería devolver 280', () => {
    expect(C13.getDuracion).to.be.equal(280);
  });
  it ('C13.getGenero debería devolver "Reggae"', () => {
    expect(C13.genero).to.be.equal("Reggae");
  });
  it ('C13.getEsFavorita debería devolver true', () => {
    expect(C13.single).to.be.equal(true);
  });
  it ('C13.getNumeroDeReproducciones debería devolver 30000', () => {
    expect(C13.getNumeroDeReproducciones()).to.be.equal(30000);
  });
  it ('C14.getname debería devolver "C14"', () => {
    expect(C14.getTitle()).to.be.equal("C14");
  });
  it ('C14.getDuracion debería devolver 150', () => {
    expect(C14.getDuracion).to.be.equal(150);
  });
  it ('C14.getGenero debería devolver "Pop"', () => {
    expect(C14.genero).to.be.equal("Pop");
  });
  it ('C14.getEsFavorita debería devolver false', () => {
    expect(C14.single).to.be.equal(false);
  });
  it ('C14.getNumeroDeReproducciones debería devolver 400', () => {
    expect(C14.getNumeroDeReproducciones()).to.be.equal(400);
  });
  it ('C15.getname debería devolver "C15"', () => {
    expect(C15.getTitle()).to.be.equal("C15");
  });
  it ('C15.getDuracion debería devolver 400', () => {
    expect(C15.getDuracion).to.be.equal(400);
  });
  it ('C15.getGenero debería devolver "ElectroRap"', () => {
    expect(C15.genero).to.be.equal("ElectroRap");
  });
  it ('C15.getEsFavorita debería devolver true', () => {
    expect(C15.single).to.be.equal(true);
  });
  it ('C15.getNumeroDeReproducciones debería devolver 20000', () => {
    expect(C15.getNumeroDeReproducciones()).to.be.equal(20000);
  });
  it ('C16.getname debería devolver "C16"', () => {
    expect(C16.getTitle()).to.be.equal("C16");
  });
  it ('C16.getDuracion debería devolver 300', () => {
    expect(C16.getDuracion).to.be.equal(300);
  });
  it ('C16.getGenero debería devolver "Rock"', () => {
    expect(C16.genero).to.be.equal("Rock");
  });
  it ('C16.getEsFavorita debería devolver false', () => {
    expect(C16.single).to.be.equal(false);
  });
  it ('C16.getNumeroDeReproducciones debería devolver 20', () => {
    expect(C16.getNumeroDeReproducciones()).to.be.equal(20);
  });
  it ('C17.getname debería devolver "C17"', () => {
    expect(C17.getTitle()).to.be.equal("C17");
  });
  it ('C17.getDuracion debería devolver 320', () => {
    expect(C17.getDuracion).to.be.equal(320);
  });
  it ('C17.getGenero debería devolver "Metal"', () => {
    expect(C17.genero).to.be.equal("Metal");
  });
  it ('C17.getEsFavorita debería devolver true', () => {
    expect(C17.single).to.be.equal(true);
  });
  it ('C17.getNumeroDeReproducciones debería devolver 300', () => {
    expect(C17.getNumeroDeReproducciones()).to.be.equal(300);
  });
  it ('C18.getname debería devolver "C18"', () => {
    expect(C18.getTitle()).to.be.equal("C18");
  });
  it ('C18.getDuracion debería devolver 280', () => {
    expect(C18.getDuracion).to.be.equal(280);
  });
  it ('C18.getGenero debería devolver "Reggae"', () => {
    expect(C18.genero).to.be.equal("Reggae");
  });
  it ('C18.getEsFavorita debería devolver false', () => {
    expect(C18.single).to.be.equal(false);
  });
  it ('C18.getNumeroDeReproducciones debería devolver 40000', () => {
    expect(C18.getNumeroDeReproducciones()).to.be.equal(40000);
  });
  it ('C18.getSongElementStr() debería devolver un string', () => {
    expect(C18.getSongElementStr()).to.be.a('string');
  });
});