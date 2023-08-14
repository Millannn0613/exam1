const mongoose = require("mongoose");
const content = new mongoose.Schema({
  image: {
    type: String,
    allowNull: false,
  },
  title: {
    type: String,
    allowNull: false,
  },
  write: {
    type: String,
    allowNull: false,
  },
});
module.exports = mongoose.model("contect", content);
