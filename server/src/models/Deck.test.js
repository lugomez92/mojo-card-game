const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card, Deck } = require('../models');
const { db } = require('../db/config');

// define in global scope
let deck;
let card1;
let card2;

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true });
    deck = await Deck.create({
      name: 'snake pit',
      xp: 100,
    });
    card1 = await Card.create({
      name: 'Arcturus Spellweaver',
      mojo: 100,
      stamina: 10,
      imgUrl: '../static/img/arcturus-spellweaver.jpg',
    });
    card2 = await Card.create({
      name: 'Nimue Mistral',
      mojo: 100,
      stamina: 10,
      imgUrl: '../static/img/nimue-mistral.jpg'
    });

    await deck.setCards([card1, card2]);
    console.log(deck);
});

afterAll(async () => await db.sync({ force: true }));

describe('Deck', () => {
  it('has name property', async () => {
    expect(deck.name).toBe('snake pit');
  });

  it('has xp property', async () => {
    expect(deck).toHaveProperty('xp');
  });

  it('One-to-many association with Card', () => {
    expect(card1).toHaveProperty('DeckId');
  });
});
