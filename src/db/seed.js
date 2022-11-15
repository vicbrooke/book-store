// const path = require("path");
// const fs = require("fs").promises;

const { db } = require("./db");
const { Author, Book, Customer } = require("../models");
const authors = require("../data/author-data");
const books = require("../data/book-data");
const customers = require("../data/customer-data");

const seed = async () => {
  await db.sync({ force: true });
  await Author.bulkCreate(authors);
  await Book.bulkCreate(books);
  await Customer.bulkCreate(customers);

  console.log("Author, Book and Customer database info populated!");
};

module.exports = seed;
