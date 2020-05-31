const mongoose = require("mongoose");

exports.mongoConnection = async (mongoURL) => {
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
