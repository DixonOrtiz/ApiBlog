const express = require("express");
const router = express.Router();

// CONTROLLERS IMPORT
const { getAllPosts } = require("../controllers/blogController");

router.route("/blog/getAllPosts").get(getAllPosts);

module.exports = router;
