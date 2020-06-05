const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

//mongoConnection function
//Function that initialize a MongoDB connection
exports.mongoConnection = async (mongoURL) => {
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
