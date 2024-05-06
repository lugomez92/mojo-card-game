const { User } = require('./User')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { Attack } = require('./Attack')
// import the rest of your models above

// set up the associations here

// User/Deck: One-to-one -> Each user may create exactly one Deck
User.hasOne(Deck); 
Deck.belongsTo(User); 

// Card-Deck: One-to-many -> Each Deck may contain many Cards
Deck.hasMany(Card); 
Card.belongsTo(Deck); 

// Card-Attack: Each Card may have many Attacks && each Attack may belong to many Cards. 
Card.belongsToMany(Attack, { through: 'CardAttack' });
Attack.belongsToMany(Card, { through: 'CardAttack' });


// and then export them all below
module.exports = { User, Deck, Card, Attack };
