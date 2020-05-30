const express = require("express");
const app = express();

const postRouter = require("./post.js");

app.use(postRouter);

module.exports = app;
