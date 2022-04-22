const { User } = require("../models");

async function getDashboard(_, res) {
  // res.json(await User.findAll());
  const userData = await User.findAll();

  res.render("user", {
    title: "Dahsboard User",
    user: userData,
  });
}

const addUser = async (_, res) => {
  res.render("user/add-user", {
    title: "Add User",
  });
};

const postUser = async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.redirect("/user");
};

const userEdit = async (req, res) => {
  const userData = await User.findByPk(req.params.id);
  console.log(userData);

  res.render("user/edit-user", {
    title: "Edit User",
    user: userData,
  });
};

const userUpdate = async (req, res) => {
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
};

const userDelete = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/user");
};

module.exports = {
  getDashboard,
  addUser,
  postUser,
  userEdit,
  userUpdate,
  userDelete,
};
