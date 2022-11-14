const { Router } = require("express");

const Author = require("../models/Author");

const authorRouter = Router();

authorRouter.get("/", async (req, res) => {
  const allAuthors = await Author.findAll();
  res.status(302).send(allAuthors);
});

authorRouter.get("/:id", async (req, res) => {
  const singleAuthor = await Author.findByPk(req.params.id);
  res.status(302).send(singleAuthor);
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
