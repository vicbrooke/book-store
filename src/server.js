const express = require("express");
const seed = require("../db/seed");
const app = express();

const authorRouter = require("../routes/authors");
const bookRouter = require("../routes/books");
const customerRouter = require("../routes/customers");

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/customers", customerRouter);

app.listen(5001, async () => {
  await seed();
  console.log("Listening on port 5001");
});

module.exports = app;
