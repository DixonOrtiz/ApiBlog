const mongoose = require("mongoose");

const { HOST, DATABASE } = require("../config/env");

const MONGO_URL = `mongodb://${HOST}/${DATABASE}`;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
