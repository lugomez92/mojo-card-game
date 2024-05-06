const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card, Attack } = require('../models');
const { db } = require('../db/config');

// Clear the database and create associations before tests
beforeAll(async () => {
  await db.sync({ force: true });

  // Create some cards
  const card1 = await Card.create({ name: 'Card 1', mojo: 100, stamina: 50 });
  const card2 = await Card.create({ name: 'Card 2', mojo: 150, stamina: 70 });

  // Create some attacks
  const attack1 = await Attack.create({ title: 'Attack 1', mojoCost: 20, staminaCost: 10 });
  const attack2 = await Attack.create({ title: 'Attack 2', mojoCost: 30, staminaCost: 15 });

  // Associate attacks with cards
  await card1.addAttack(attack1);
  await card2.addAttack(attack2);
});

// Clear the database after tests
afterAll(async () => {
  await db.close();
});

describe('Card and Attack association', () => {
  it('Card has associated Attacks', async () => {
    const card = await Card.findOne({ where: { name: 'Card 1' }, include: Attack });
    expect(card.Attacks.length).toBe(1);
    expect(card.Attacks[0].title).toBe('Attack 1');
  });

  it('Attack has associated Cards', async () => {
    const attack = await Attack.findOne({ where: { title: 'Attack 2' }, include: Card });
    expect(attack.Cards.length).toBe(1);
    expect(attack.Cards[0].name).toBe('Card 2');
  });
});
