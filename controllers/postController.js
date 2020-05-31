const Post = require("../models/Post");

//getPostByID controller
//Function that gets a post by id id from db
exports.getPostByID = async (request, response) => {
  console.log("\n[Blog Api][Get][/post/getPostByID][Request]", request.body);

  try {
    const { postID } = request.body;

    await Post.findById(postID).then((post) => {
      console.log("[Blog Api][Get][/post/getPostByID][Response]", {
        post,
      });
      response.status(200).json(post);
    });
  } catch (error) {
    console.log(`[Blog Api][Get][/post/getPostByID][Error]`, error);
    response.status(500).json({
      error,
    });
  }

  console.log("[Blog Api][Get][/post/getPostByID][Done]\n");
};

//getAllPosts controller
//Function that gets all posts documents from db
exports.getAllPosts = async (request, response) => {
  console.log("\n[Blog Api][Get][/post/getAllPosts][Request]", request.body);

  try {
    await Post.find({}).then((posts) => {
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

//updatePost controller
//Function that updates an existing document in db
exports.updatePost = async (request, response) => {
  console.log("\n[Blog Api][Put][/post/updatePost][Request]", request.body);

  try {
    const { id } = request.body;

    await Post.findByIdAndUpdate(
      id,
      { $set: request.body },
      { new: true },
      (error, post) => {
        if (error) {
          //this block is empty because the error is handling with try->catch
        } else {
          console.log("[Blog Api][Put][/post/updatePost][Response]", {
            post,
          });
          response.status(200).json({ post });
        }
      }
    );
  } catch (error) {
    console.log(`[Blog Api][Put][/post/updatePost][Error]`, error);
    response.status(500).json({
      error,
    });
  }

  console.log("[Blog Api][Put][/post/updatePost][Done]\n");
};
