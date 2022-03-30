const express = require("express");
const router = express.Router();

const { User } = require("../models");

router.get("/user", async (_, res) => {
  res.json(await User.findAll());
});

router.post("/user", async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).json(user);
});

router.put("/user/:id", async (req, res) => {
// router.put("/user", async (req, res) => {
  const user = await User.update({
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass,
  }, {
    where: {
      id: req.params.id
      // id: req.body.id
    }
  });

  res.status(201).json(user);
});

router.delete("/user", async (req, res) => {
  const user = await User.destroy({
    where: {
      id: req.body.id,
    }
  })

  res.json(user);
});

module.exports = router;
