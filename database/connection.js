const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

exports.mongoConnection = async (mongoURL) => {
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
