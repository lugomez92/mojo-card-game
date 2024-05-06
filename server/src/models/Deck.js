const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const Deck = db.define('Deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp: { // Add xp field with default value
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 // Provide a default value for xp
    }
});

module.exports = { Deck };
