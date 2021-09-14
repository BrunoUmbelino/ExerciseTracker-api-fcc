const Users = require("../Models/UserModel");

const AddUser = (req, res) => {
  const { v4: uuidv4 } = require("uuid");

  const _id = uuidv4().substr(0, 8);
  const { username } = req.body;
  const newUser = { _id, username };

  Users.addUser(newUser);

  res.json(newUser);
};

const AllUsers = (req, res) => {
  res.json({ users: Users.getAllUsers() });
};

const AddExercises = (req, res) => {
  const { _id } = req.params;
  let { description, duration, date } = req.body;
  duration = parseInt(duration);

  const user = Users.findUser(_id);

  if (!user) return res.send("User not found");
  if (!description) return res.send("Description is required!");
  if (!duration) return res.send("Duration is required and must be a number");
  if (!date) {
    date = new Date().toLocaleDateString();
  } else date = new Date(date).toLocaleDateString();

  const newExercise = {
    _id: user._id,
    username: user.username,
    date,
    duration,
    description,
  };

  res.json(newExercise);
};

const LogsUser = (req, res) => {
  const { _id } = req.params;

  const user = Users.findUser(_id);
  if (!user) return res.send("User not found");

  res.send("Some logs here :D");
};

module.exports = { AllUsers, AddUser, AddExercises, LogsUser };
