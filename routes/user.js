const express = require("express");
const router = express.Router();

const { redirect } = require("express/lib/response");
const { User } = require("../models");

router.get("/user", async (_, res) => {
  // res.json(await User.findAll());
  const userData = await User.findAll();

  res.render("user", {
    title: "Dahsboard User",
    user: userData,
  });
});

// ADD DATA
router.get("/user/add", async (_, res) => {
  res.render("user/add-user", {
    title: "Add User",
  });
});

router.post("/user/post", async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.redirect("/user");
});

// UPDATE DATA
router.get("/user/edit/:id", async (req, res) => {
  const userData = await User.findByPk(req.params.id);

  res.render("user/edit-user", {
    title: "Edit User",
    user: userData,
  });
});

router.post("/user/update", async (req, res) => {
  await User.update(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    {
      where: {
        id: +req.body.id,
      },
    }
  );

  res.redirect("/user");
});

// DELETE DATA
router.get("/user/delete/:id", async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/user");
});

module.exports = router;
