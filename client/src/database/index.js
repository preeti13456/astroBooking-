const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database, {
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;