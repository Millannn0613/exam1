const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Та эцэг/эхийн нэрээ оруулна уу"],
  },
  email: {
    type: String,
    required: [true, "Та email оруулна уу"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email буруу байна"],
  },
  password: {
    type: String,
    required: [true, "Та password оруулна уу"],
  },
});

module.exports = mongoose.model("User", userSchema);
