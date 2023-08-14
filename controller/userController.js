const User = require("../model/user");

const NewUser = async (req, res) => {
  try {
    const { firstname, email, password } = req.body;
    const newUser = await User.create({ firstname, email, password });
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { NewUser };
