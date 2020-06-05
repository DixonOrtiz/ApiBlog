const express = require("express");
const app = express();

const postRouter = require("./post.js");
const authRouter = require("./auth.js");

app.use(postRouter, authRouter);

module.exports = app;
