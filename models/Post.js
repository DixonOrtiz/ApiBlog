const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = model("Post", PostSchema);
