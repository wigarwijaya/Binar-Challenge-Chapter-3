const express = require("express");
const router = express.Router();
const user = require("./user");
const history = require("./history");

router.use(user);
router.use(history);

module.exports = router;
