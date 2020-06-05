require("dotenv").config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.log("[Blog Api][Error] No PORT environment variable in .env file");
  process.exit(1);
}

const HOST = process.env.HOST;
if (HOST === undefined) {
  console.log("[Blog Api][Error] No HOST environment variable in .env file");
  process.exit(1);
}

const DATABASE = process.env.DATABASE;
if (DATABASE === undefined) {
  console.log(
    "[Blog Api][Error] No DATABASE environment variable in .env file"
  );
  process.exit(1);
}

const CLIENT_ID = process.env.CLIENT_ID;
if (CLIENT_ID === undefined) {
  console.log(
    "[Blog Api][Error] No CLIENT_ID environment variable in .env file"
  );
  process.exit(1);
}

const CLIENT_SECRET = process.env.CLIENT_SECRET;
if (CLIENT_SECRET === undefined) {
  console.log(
    "[Blog Api][Error] No CLIENT_SECRET environment variable in .env file"
  );
  process.exit(1);
}

module.exports = {
  PORT,
  HOST,
  DATABASE,
  CLIENT_ID,
  CLIENT_SECRET,
};
