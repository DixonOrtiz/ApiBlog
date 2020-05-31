const express = require("express");
const expressConfig = require("./config/express");
const { PORT, HOST, DATABASE } = require("./config/env");
const { mongoConnection } = require("./database/connection");

const mongoURL = `mongodb://${HOST}/${DATABASE}`;

mongoConnection(mongoURL).catch((error) => {
  console.log(
    `[Blog Api][Error] Could not connect to mongo database. \nerr: ${error}`
  );
  process.exit(1);
});

const app = express();
expressConfig(app);

app.listen(PORT, () => {
  console.log("[Blog Api] Running at port", PORT);
});
