const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// EJS USER PAGE
router.get("/user", userController.getDashboard);

// ADD DATA
router.get("/user/add", userController.addUser);
router.post("/user/post", userController.postUser);

// UPDATE DATA
router.get("/user/edit/:id", userController.userEdit);
router.post("/user/update", userController.userUpdate);

// DELETE DATA
router.get("/user/delete/:id", userController.userDelete);

module.exports = router;
