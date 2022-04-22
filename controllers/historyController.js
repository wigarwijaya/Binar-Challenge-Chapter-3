const { History } = require("./../models");

const getDashboard = async (_, res) => {
  const historyData = await History.findAll();

  res.render("history", {
    title: "Dashboard History",
    histories: historyData,
  });
};

const addHistory = async (_, res) => {
  res.render("history/add-history", {
    title: "Add History",
  });
};

const postHistory = async (req, res) => {
  await History.create({
    playedAt: Date.now(),
    playerScore: req.body.playerScore,
    computerScore: req.body.computerScore,
    UserId: req.body.userId,
  });

  res.redirect("/histories");
};

const editHistory = async (req, res) => {
  const historyData = await History.findByPk(req.params.id);

  res.render("history/edit-history", {
    title: "Edit History",
    history: historyData,
  });
};

const updateHistory = async (req, res) => {
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
};

const deleteHistory = async (req, res) => {
  await History.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/histories");
};

module.exports = {
  getDashboard,
  addHistory,
  postHistory,
  editHistory,
  updateHistory,
  deleteHistory,
};
