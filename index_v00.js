const express = require("express");
const app = express();

app.use(express.urlencoded());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static('assets'))

app.set("view engine", "ejs");

// const { Game, Biodata, History } = require("./models");
// app.get("/", async (_, res) => {
//   const data = await Game.findAll({
//     include: [Biodata, History],
//   });
//   res.json(data);
// });

const user = require('./db/user.json');
let isLogin = false;


app.use((req, res, next) => {
  // isLogin = false;
  // !isLogin = true;

  if (req.url === '/game' && !isLogin) {
    res.redirect('login');
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
    error: '',
  });
});

// API LOGIN
app.post("/login/auth", (req, res) => {
  if (user.email === req.body.uEmail && user.password === req.body.uPassword) {
    isLogin = true;
    res.redirect('/game');
  } else {
    res.render("login", {
      error: 'Your password and email is wrong',
    });
  }
});


app.listen(3000, () => console.log("Your server is running ..."));
