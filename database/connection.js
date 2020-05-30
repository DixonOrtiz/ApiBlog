const mongoose = require("mongoose");

const { HOST, DATABASE } = require("../config/env");

const mongoURL = `mongodb://${HOST}/${DATABASE}`;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB is connected.`))
  .catch((err) => {
    console.log(
      "[Blog Api][Error] Error during connection to the MongoDB database"
    );
    process.exit(1);
  });
