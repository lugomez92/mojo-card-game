// add your database connection here
const { Sequelize } = require('sequelize');

//create an instance of this sequelize class
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './my-database.sqlite'
})

module.exports = { db };