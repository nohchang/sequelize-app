const Sequelize = require('sequelize');

const dbCconfig = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'password',
  PORT: '5432',
  DB: 'postgres',
  dialect: 'postgres'
};

const sequelize = new Sequelize(dbCconfig.DB, dbCconfig.USER, dbCconfig.PASSWORD, {
  host: dbCconfig.HOST,
  dialect: dbCconfig.dialect,
  port: dbCconfig.PORT
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model')(sequelize, Sequelize);

module.exports = db;