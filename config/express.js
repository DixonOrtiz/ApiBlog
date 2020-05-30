const routes = require("../routes");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());

  app.use(routes);
};
