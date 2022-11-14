const { db, Model, DataTypes } = require("../db/db");

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db }
);

module.exports = Book;
