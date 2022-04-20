const mongoose = require("mongoose");
var mongoDBURL =
  "mongodb+srv://gluay:gluay@cluster0.vn32p.mongodb.net/TopNotch-Tech";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("MongoDB Connection Failed!");
});

dbconnect.on("connected", () => {
  console.log("MongoDB Connection Successful!");
});

module.exports = mongoose;
