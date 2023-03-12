import 'mocha'
import { expect } from 'chai'
import { Documentary } from '../src/ejercicio-1/documentaryClass'
import { DocumentaryCollection } from '../src/ejercicio-1/documentaryCollectionClass'

const documentary1 = new Documentary('D1', 2019, 'Animales Acuaticos', 3600);
const documentary2 = new Documentary('D2', 2019, 'Animales Terrestres', 3600);
const documentary3 = new Documentary('D3', 2019, 'Animales Acuaticos', 3600);
const documentary4 = new Documentary('D4', 2019, 'Animales Terrestres', 3600);
const documentary5 = new Documentary('D5', 2019, 'Terror', 3600);
const documentary6 = new Documentary('D6', 2019, 'Terror', 3600);
const documentary7 = new Documentary('D7', 2019, 'Espaciales', 3600);
const documentary8 = new Documentary('D8', 2019, 'Espaciales', 3600);

const documentaryCollection = new DocumentaryCollection([documentary1, documentary2, documentary3, documentary4, documentary5, documentary6, documentary7, documentary8]);


describe('Test de la clase Documentary y DocumentaryCollection', () => {
  it ('Test método findByYear: ', () => {
    expect(documentaryCollection.findByYear(2019)).to.eql([documentary1, documentary2, documentary3, documentary4, documentary5, documentary6, documentary7, documentary8]);
  });
  it ('Test método findByTitle: ', () => {
    expect(documentaryCollection.findByTitle('D1')).to.equal(true);
  });
  it ('Test método findByTitle: ', () => {
    expect(documentaryCollection.findByTitle('D9')).to.equal(false);
  });
  it ('Test método findByGender: ', () => {
    expect(documentaryCollection.findByGender('Animales Acuaticos')).to.eql([documentary1, documentary3]);
  });
  it ('Test método countElements: ', () => {
    expect(documentaryCollection.countElements()).to.equal(8);
  });
  it ('Test método pushElement: ', () => {
    documentaryCollection.pushElement(documentary1); 
    expect(documentaryCollection.countElements()).to.equal(9);
  });
  it ('Test método getNumOfSeasons: ', () => {
    expect(documentaryCollection.getTimeOfFilm('D1')).to.equal(3600);
  });
  it ('Test método getCollection: ', () => {
    expect(documentaryCollection.getCollection()).to.eql([documentary1, documentary2, documentary3, documentary4, documentary5, documentary6, documentary7, documentary8, documentary1]);
  });
});
