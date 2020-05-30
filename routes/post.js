const express = require("express");
const router = express.Router();

const { getAllPosts, createPost } = require("../controllers/postController");

router.route("/post/getAllPosts").get(getAllPosts);
router.route("/post/createPost").post(createPost);

module.exports = router;
