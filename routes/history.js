const router = require("express").Router();
const historyController = require("../controllers/historyController");

// EJS HISTORY PAGE
router.get("/histories", historyController.getDashboard);

// ADD DATA
router.get("/history/add", historyController.addHistory);
router.post("/history/post", historyController.postHistory);

// UPDATE DATA
router.get("/history/edit/:id", historyController.editHistory);
router.post("/history/update", historyController.updateHistory);

// DELETE DATA
router.get("/history/delete/:id", historyController.deleteHistory);

module.exports = router;
