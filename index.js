const express = require("express");
const app = express();

app.use(express.urlencoded());

let isLogin = false;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  // isLogin = false;
  // !isLogin = true;

  if (req.url === 'game' && !isLogin) {
    res.redirect('/login');
  }

  next();
});

// EJS HOME PAGE
app.get("/", (req, res) => {
  res.render("index");
});

// EJS LOGIN PAGE
app.get("/login", (req, res) => {
  res.render("login", {
    error: '',
  });
});

// API LOGIN
app.post("/login/auth", (req, res) => {
  const user = require('./db/user.json');

  if (user.email === req.body.uEmail && user.password === req.body.uPassword) {
    isLogin = true;
    res.redirect('/game');
  } else {
    res.render("login", {
      error: 'Your password and email was wrong',
    });
  }
});

// EJS GAME PAGE
app.get("/game", (req, res) => {
    res.render("game");
  });
  

app.listen(8080, () => console.log("Server Running ..."));
