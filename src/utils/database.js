const { Sequelize } = require('sequelize');

const db = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'entregable_3',
    username: 'postgres',
    password: '1234',
    dialect: 'postgres'
});

module.exports = db;