const router = require("express").Router();

const { redirect } = require("express/lib/response");
const { History } = require("./../models");

router.get("/histories", async (_, res) => {
  const historyData = await History.findAll();

  res.render("history", {
    title: "Dashboard History",
    histories: historyData,
  });
});

// ADD DATA
router.get("/history/add", async (_, res) => {
  res.render("history/add-history", {
    title: "Add History",
  });
});

router.post("/history/post", async (req, res) => {
  await History.create({
    playedAt: Date.now(),
    playerScore: req.body.playerScore,
    computerScore: req.body.computerScore,
    UserId: req.body.userId,
  });

  res.redirect("/histories");
});

// UPDATE DATA
router.get("/history/edit/:id", async (req, res) => {
  const historyData = await History.findByPk(req.params.id);

  res.render("history/edit-history", {
    title: "Edit History",
    history: historyData,
  });
});

router.post("/history/update", async (req, res) => {
  await History.update(
    {
      playedAt: Date.now(),
      playerScore: req.body.playerScore,
      computerScore: req.body.computerScore,
      UserId: req.body.userId,
    },
    {
      // where: parseInt(req.body.id),
      where: {
        id: +req.body.id,
      },
    }
  );

  res.redirect("/histories");
});

// DELETE DATA
router.get("/history/delete/:id", async (req, res) => {
  await History.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/histories");
});

module.exports = router;
