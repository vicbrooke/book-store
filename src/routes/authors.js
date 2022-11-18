const { Router } = require("express");

const Author = require("../models/Author");
const Book = require("../models/Book");

const authorRouter = Router();

authorRouter.get("/", async (req, res) => {
  const allAuthors = await Author.findAll();
  res.status(302).send(allAuthors);
});

authorRouter.get("/:id", async (req, res) => {
  const singleAuthor = await Author.findByPk(req.params.id);
  res.status(302).send(singleAuthor);
});

authorRouter.get("/:id/books", async (req, res) => {
  const booksByAuthor = await Author.findByPk(req.params.id, { include: Book });
  res.status(302).send(booksByAuthor.Books);
});

authorRouter.put("/:id", async (req, res) => {
  await Author.update(req.body, {
    where: { id: req.params.id },
  });
  const updatedAuthor = await Author.findByPk(req.params.id);
  res.status(202).send({ updatedAuthor });
});

authorRouter.post("/", async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.status(201).send(newAuthor);
});

authorRouter.delete("/:id", async (req, res) => {
  const authorToDelete = await Author.findByPk(req.params.id);
  const authorName = authorToDelete.name;
  await Author.destroy({
    where: {
      name: authorName,
    },
  });
  res.status(202).send(`'${authorName}' was successfully deleted`);
});

module.exports = authorRouter;
