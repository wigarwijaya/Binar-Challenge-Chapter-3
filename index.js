const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));

app.set("view engine", "ejs");

const routes = require("./routes");
const userList = require("./db/user.json");

app.use(routes);

let isLogin = false;

app.use((req, res, next) => {
  // isLogin = false;
  // !isLogin = true;

  if (req.url === "/game" && !isLogin) {
    res.redirect("login");
  }

  next();
});

// EJS HOME PAGE
app.get("/", (req, res) => {
  res.render("index");
});

// EJS GAME PAGE
app.get("/game", (req, res) => {
  res.render("game");
});

// EJS LOGIN PAGE
app.get("/login", (req, res) => {
  res.render("login", {
    error: "",
  });
});

// API LOGIN
app.post("/login/auth", (req, res) => {
  if (
    userList.email === req.body.userEmail &&
    userList.password === req.body.userPassword
  ) {
    isLogin = true;
    res.redirect("/user");
  } else {
    res.render("login", {
      error: "Your password and email is wrong",
    });
  }
});

app.listen(port, () => console.log(`Server is listening on port ${port}..`));
