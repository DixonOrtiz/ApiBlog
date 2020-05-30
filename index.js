const express = require("express");
const expressConfig = require("./config/express");
const { PORT } = require("./config/env");

const app = express();
require("./database/connection");
expressConfig(app);

app.listen(PORT, () => {
  console.log("[Blog Api] Running at port", PORT);
});
