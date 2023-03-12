import 'mocha'
import { expect } from 'chai'
import { Film } from '../src/ejercicio-1/filmClass'
import { FilmCollection } from '../src/ejercicio-1/filmCollectionClass'

const film1 = new Film('Matrix' , 1999, 'Action', 7200);
const film2 = new Film('Iron man 1' , 2008, 'Action', 7200);
const film3 = new Film('Iron man 2', 2010, 'Action', 7000);
const film4 = new Film('Iron man 3', 2013, 'Action', 7000);
const film5 = new Film('Avengers: Endgame', 2019, 'Action', 4500);
const film6 = new Film('Avengers: Infinity War', 2018, 'Action', 7200);

const filmCollection = new FilmCollection([film1, film2, film3, film4, film5, film6]);

describe('Test clases Film y FilmCollection: ', () => {
  it ('Test método findByYear: ', () => {
    expect(filmCollection.findByYear(2013)).to.eql([film4]);
  });
  it ('Test método findByTitle: ', () => {
    expect(filmCollection.findByTitle('Iron man 1')).to.equal(true);
  });
  it ('Test método findByTitle: ', () => {
    expect(filmCollection.findByTitle('Exterminator')).to.equal(false);
  });
  it ('Test método findByGender: ', () => {
    expect(filmCollection.findByGender('Action')).to.eql([film1, film2, film3, film4, film5, film6]);
  });
  it ('Test método countElements: ', () => {
    expect(filmCollection.countElements()).to.equal(6);
  });
  it ('Test método pushElement: ', () => {
    filmCollection.pushElement(film1); 
    expect(filmCollection.countElements()).to.equal(7);
  });
  it ('Test método getNumOfSeasons: ', () => {
    expect(filmCollection.getTimeOfFilm('Matrix')).to.equal(7200);
  });
  it ('Test método getCollection: ', () => {
    expect(filmCollection.getCollection()).to.eql([film1, film2, film3, film4, film5, film6, film1]);
  });
});
