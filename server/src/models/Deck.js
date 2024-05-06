const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const Deck = db.define('Deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    xp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = { Deck };