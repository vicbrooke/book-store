const Author = require("./Author");
const Book = require("./Book");
const Customer = require("./Customer");

Author.hasMany(Book);
Book.belongsTo(Author);

Customer.belongsToMany(Book, { through: "CustomerBooks" });
Book.belongsToMany(Customer, { through: "CustomerBooks" });

module.exports = { Author, Book, Customer };
