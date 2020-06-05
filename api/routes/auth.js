const express = require("express");
const router = express.Router();

const {
  handleLogin,
  handleCallback,
} = require("../controllers/authController");

router.route("/login").get(handleLogin);
router.route("/callback").get(handleCallback);

module.exports = router;
