const express = require("express");
const router = express.Router();

const {
  getPostByID,
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/post/getPostByID").get(getPostByID);
router.route("/post/getAllPosts").get(getAllPosts);
router.route("/post/createPost").post(createPost);
router.route("/post/updatePost").put(updatePost);
router.route("/post/deletePost").delete(deletePost);

module.exports = router;
