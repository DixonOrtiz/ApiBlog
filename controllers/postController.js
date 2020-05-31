const Post = require("../models/Post");

//getAllPosts controller
//Function that gets all posts documents from db
exports.getAllPosts = async (request, response) => {
  console.log("\n[Blog Api][Get][/post/getAllPosts][Request]", request.body);

  try {
    await Post.find({}).then(function (posts) {
      console.log("[Blog Api][Get][/post/getAllPosts][Response]", {
        posts,
      });
      response.status(200).json(posts);
    });
  } catch (error) {
    console.log(`[Blog Api][Get][/post/getAllPosts][Error]`, error);
    response.status(500).json({
      error,
    });
  }

  console.log("[Blog Api][Get][/post/getAllPosts][Done]\n");
};

//createPost controller
//Function that creates a new Post document in db
exports.createPost = async (request, response) => {
  console.log("\n[Blog Api][Post][/post/createPost][Request]", request.body);

  try {
    const { title, content } = request.body;
    const newPost = new Post({ title, content });
    await newPost.save();

    console.log("[Blog Api][Post][/post/createPost][Response]", {
      newPost,
    });
    response.status(200).json({ newPost });
  } catch (error) {
    console.log(`[Blog Api][Post][/post/createPost][Error]`, error);
    response.status(500).json({
      error,
    });
  }

  console.log("[Blog Api][Post][/post/createPost][Done]\n");
};
