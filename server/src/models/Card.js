const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const Card = db.define('Card', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    stamina: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    imgUrl: {
        type: DataTypes.STRING,
    }

});

module.exports = { Card };