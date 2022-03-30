const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const user = require("./routes/user");
const history = require("./routes/history");

app.use(user);
app.use(history);

const { User, Biodata, History } = require("./models");

app.get("/", async (_, res) => {
  const data = await User.findAll({
    include: [Biodata, History],
  });
  res.json(data);
});

app.listen(8000);
