const { Router } = require("express");

const Customer = require("../models/Customer");

const customerRouter = Router();

customerRouter.get("/", async (req, res) => {
  const allCustomers = await Customer.findAll();
  res.status(302).send(allCustomers);
});

customerRouter.get("/:id", async (req, res) => {
  const singleCustomer = await Customer.findByPk(req.params.id);
  res.status(302).send(singleCustomer);
});

customerRouter.post("/", async (req, res) => {
  const newCustomer = await Customer.create(req.body);
  res.status(201).send(newCustomer);
});

customerRouter.put("/:id", async (req, res) => {
  await Customer.update(req.body, { where: { id: req.params.id } });
  const updatedCustomer = await Customer.findByPk(req.params.id);
  res.status(202).send(updatedCustomer);
});

customerRouter.delete("/:id", async (req, res) => {
  const { name } = await Customer.findByPk(req.params.id);
  await Customer.destroy({ where: { id: req.params.id } });
  res.status(202).send(`'${name}' was successfully deleted`);
});

module.exports = customerRouter;
