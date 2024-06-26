const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const User = db.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { User };
