import 'mocha';
import { expect } from 'chai';
import { Cancion } from "../src/ejercicio-3/cancionClass";
import { Single } from "../src/ejercicio-3/singleClass";

const C1 = new Cancion("C1", 300, "Rock", true, 1000);
const C2 = new Cancion("C2", 320, "Metal", false, 200);
const C3 = new Cancion("C3", 280, "Reggae", true, 30000);
const C4 = new Cancion("C4", 150, "Pop", false, 400);

const S1 = new Single("S1", 2020, C1, "Version1");
const S2 = new Single("S2", 2020, C2, ["Version1", "Version2"]);
const S3 = new Single("S3", 2020, C3, ["Version1", "Version2", "Version3"]);
const S4 = new Single("S4", 2020, C4, "Version1");

describe('Test de la clase Single', () => {
  it ('S1.getName() debe devolver S1', () => {
    expect(S1.getName()).to.be.equal("S1");
  });
  it ('S1.getYear() debe devolver 2020', () => {
    expect(S1.getYear()).to.be.equal(2020);
  });
  it ('S1.getSong() debe devolver C1', () => {
    expect(S1.getSong()).to.be.equal(C1);
  });
  it ('S1.getVersions() debe devolver Version1', () => {
    expect(S1.getVersion()).to.be.equal("Version1");
  });
  it ('S1.getSongDuration debe devolver 300', () => {
    expect(S1.getSongDuration()).to.be.equal(300);
  });
  it ('S1.getNumOfReproductions debe devolver 1000', () => {
    expect(S1.getNumOfReproductions()).to.be.equal(1000);
  });
  it ('S2.getName debe devolver S2', () => {
    expect(S2.getName()).to.be.equal("S2");
  });
  it ('S2.getYear debe devolver 2020', () => {
    expect(S2.getYear()).to.be.equal(2020);
  });
  it ('S2.getSong debe devolver C2', () => {
    expect(S2.getSong()).to.be.equal(C2);
  });
  it ('S2.getVersions debe devolver ["Version1", "Version2"]', () => {
    expect(S2.getVersion()).to.be.eql(["Version1", "Version2"]);
  });
  it ('S2.getSongDuration debe devolver 320', () => {
    expect(S2.getSongDuration()).to.be.equal(320);
  });
  it ('S2.getNumOfReproductions debe devolver 200', () => {
    expect(S2.getNumOfReproductions()).to.be.equal(200);
  });
  it ('S3.getName debe devolver S3', () => {
    expect(S3.getName()).to.be.equal("S3");
  });
  it ('S3.getYear debe devolver 2020', () => {
    expect(S3.getYear()).to.be.equal(2020);
  });
  it ('S3.getSong debe devolver C3', () => {
    expect(S3.getSong()).to.be.equal(C3);
  });
  it ('S3.getVersions debe devolver ["Version1", "Version2", "Version3"]', () => {
    expect(S3.getVersion()).to.be.eql(["Version1", "Version2", "Version3"]);
  });
  it ('S3.getSongDuration debe devolver 280', () => { 
    expect(S3.getSongDuration()).to.be.equal(280);
  });
  it ('S3.getNumOfReproductions debe devolver 30000', () => {
    expect(S3.getNumOfReproductions()).to.be.equal(30000);
  });
  it ( 'S4.getName debe devolver S4', () => {
    expect(S4.getName()).to.be.equal("S4");
  });
  it ('S4.getYear debe devolver 2020', () => {
    expect(S4.getYear()).to.be.equal(2020);
  });
  it ('S4.getSong debe devolver C4', () => {
    expect(S4.getSong()).to.be.equal(C4);
  });
  it ('S4.getVersions debe devolver Version1', () => {
    expect(S4.getVersion()).to.be.equal("Version1");
  });
  it ('S4.getSongDuration debe devolver 150', () => {
    expect(S4.getSongDuration()).to.be.equal(150);
  });
  it ('S4.getNumOfReproductions debe devolver 400', () => {
    expect(S4.getNumOfReproductions()).to.be.equal(400);
  });
});

