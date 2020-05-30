const mongoose = require("mongoose");

exports.mongoConnection = async (mongoURL) => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(
      `[Blog Api][Error] Could not connect to mongo database. \n\terr: ${err}`
    );
    process.exit(1);
  }
};
