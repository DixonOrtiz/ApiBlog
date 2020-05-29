const express = require("express");
const expressConfig = require("./config/express");
const { PORT } = require("./config/env");

const app = express();
expressConfig(app);

app.listen(PORT, () => {
  console.log("[Blog Api] Running at port", PORT);
});
