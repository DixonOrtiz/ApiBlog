const express = require("express");
const app = express();

const blogRouter = require("./blog.js");

app.use(blogRouter);

module.exports = app;
