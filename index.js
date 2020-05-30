const express = require("express");
const expressConfig = require("./config/express");
const { PORT, HOST, DATABASE } = require("./config/env");
const { mongoConnection } = require("./database/connection");

const mongoURL = `mongodb://${HOST}/${DATABASE}`;

const app = express();
mongoConnection(mongoURL);
expressConfig(app);

app.listen(PORT, () => {
  console.log("[Blog Api] Running at port", PORT);
});
