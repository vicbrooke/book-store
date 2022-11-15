const { Sequelize, Model, DataTypes } = require("sequelize");
const path = require("path");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "bookshop.sqlite"),
  logging: false,
});

module.exports = { db, DataTypes, Model };
