const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const Attack = db.define('Attack', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    mojoCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    staminaCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = { Attack };