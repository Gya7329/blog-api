const mongoose = require("mongoose");

module.exports.db_connect = async (URL) => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database is connected...");
    })
    .catch((error) => {
      console.log("Error:", error.message);
    });
};
