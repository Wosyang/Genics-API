const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users)({
      message: "Get users success",
      data: users
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Get users failed', data: error });
  }
};

const saveUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();

    res.status(201).json({
      message: "Save user success",
      data: savedUser
    })
  } catch (error) {
    res.status(500).json({
      message: "Get users failed",
      data: error
    })
  }
};

module.exports = {
  getUsers,
  saveUser
};
