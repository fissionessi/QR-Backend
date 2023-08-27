const User = require('../models/userModel');

async function getUser(req, res) {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createUser(req, res) {
  try {
    console.log("resquest",req.body);
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}

module.exports = {
  getUser,
  createUser,
  updateUser,
};
