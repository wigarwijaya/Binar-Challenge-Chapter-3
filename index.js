const express = require("express");
const app = express();

// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('assets'))

app.set("view engine", "ejs");

const user = require("./routes/user");
const history = require("./routes/history");

app.use(user);
app.use(history);

const userList = require('./db/user.json');
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

// EJS DATA USER PAGE
app.get("/user", (req, res) => {
  res.render("/user/index");
});


// EJS USER HISTORY PAGE
app.get("/histories", (req, res) => {
    res.render("/history/index");
  });


// API LOGIN
app.post("/login/auth", (req, res) => {
  if (userList.email === req.body.userEmail && userList.password === req.body.userPassword) {
    isLogin = true;
    res.redirect("/user");
  } else {
    res.render("login", {
      error: 'Your password and email is wrong',
    });
  }
});



app.listen(3000, () => console.log("Your server is running ..."));
