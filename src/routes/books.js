const { Router } = require("express");

const { Book, Author } = require("../models");

const bookRouter = Router();

bookRouter.get("/", async (req, res) => {
  const allBooks = await Book.findAll();
  res.status(302).send({ allBooks });
});

bookRouter.get("/:id", async (req, res) => {
  const singleBook = await Book.findByPk(req.params.id);
  res.status(302).send({ singleBook });
});

bookRouter.get("/genres/:genre", async (req, res) => {
  const booksByGenre = await Book.findAll({
    where: { genre: req.params.genre },
  });
  res.status(302).send({ booksByGenre });
});

bookRouter.post("/", async (req, res) => {
  const { title, author, image, genre, price, rating, reviews } = req.body;
  let bkAuthor = await Author.findOne({ where: { name: author } });

  if (!bkAuthor) {
    await Author.create({ name: author });
    bkAuthor = await Author.findOne({ where: { name: author } });
  }

  let newBook = await Book.create({
    title: title,
    image: image,
    genre: genre,
    price: price,
    rating: rating,
    reviews: reviews,
    AuthorId: bkAuthor.id,
  });

  res.status(201).send({ newBook });
});

bookRouter.put("/:id", async (req, res) => {
  await Book.update(req.body, {
    where: { id: req.params.id },
  });
  const updatedBook = await Book.findByPk(req.params.id);
  res.status(202).send({ updatedBook });
});

bookRouter.delete("/:id", async (req, res) => {
  const { title } = await Book.findByPk(req.params.id);
  await Book.destroy({ where: { id: req.params.id } });
  res.status(202).send(`'${title}' was successfully deleted`);
});

module.exports = bookRouter;
