const Post = require("../models/Post");

exports.getAllPosts = (request, response) => {
  response.send("All Posts");
};

exports.createPost = async (request, response) => {
  const { title, content } = request.body;

  const newPost = new Post({ title, content });
  await newPost.save();

  response.status(200).send(newPost);
};
