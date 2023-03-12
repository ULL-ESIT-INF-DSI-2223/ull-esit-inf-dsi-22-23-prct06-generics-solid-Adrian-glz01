import 'mocha'
import { expect } from 'chai'
import { Serie } from '../src/ejercicio-1/serieClass'
import { SerieCollection } from '../src/ejercicio-1/serieCollectionClass'

const serie1 = new Serie('The Walking Dead', 2010, 'Drama', 10)
const serie2 = new Serie('Breaking Bad', 2008, 'Drama', 5)
const serie3 = new Serie('Game of Thrones', 2011, 'Fantasy', 8)
const serie4 = new Serie('The Big Bang Theory', 2007, 'Comedy', 12)
const serie5 = new Serie('The Simpsons', 1989, 'Comedy', 32)
const serie6 = new Serie('The Office', 2005, 'Comedy', 9)
const serie7 = new Serie('Friends', 1994, 'Comedy', 10)
const serie8 = new Serie('La que se avecina', 2007, 'Comedy', 13)
const serie9 = new Serie('Vikings' , 2013, 'Drama', 6)
const serie10 = new Serie('Peaky Blinders', 2013, 'Drama', 5)

const serieCollection = new SerieCollection([serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8, serie9, serie10]);

describe('Test clases Serie ySerieCollection: ', () => {
    it ('Test método findByYear: ', () => {
        expect(serieCollection.findByYear(2013)).to.eql([serie9, serie10]);
    });
    it ('Test método findByTitle: ', () => {
        expect(serieCollection.findByTitle('Friends')).to.equal(true);
    });
    it ('Test método findByTitle: ', () => {
        expect(serieCollection.findByTitle('Aqui no hay quien viva')).to.equal(false);
    });
    it ('Test método findByGender: ', () => {
        expect(serieCollection.findByGender('Comedy')).to.eql([serie4, serie5, serie6, serie7, serie8]);
    });
    it ('Test método countElements: ', () => {
        expect(serieCollection.countElements()).to.equal(10);
    });
    it ('Test método pushElement: ', () => {
        serieCollection.pushElement(serie1); // le metemos la serie 1 de nuevo, solamente para testear
        expect(serieCollection.countElements()).to.equal(11);
    });
    it ('Test método getNumOfSeasons: ', () => {
        expect(serieCollection.getNumOfSeasons('The Walking Dead')).to.equal(10);
    });
    it ('Test método getCollection: ', () => {
        expect(serieCollection.getCollection()).to.eql([serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8, serie9, serie10, serie1]);
    });
});