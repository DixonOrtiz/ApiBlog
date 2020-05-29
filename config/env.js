require("dotenv").config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.log("[Blog Api][Error] No PORT environment variable in .env");
  process.exit(1);
}

module.exports = {
  PORT,
};
