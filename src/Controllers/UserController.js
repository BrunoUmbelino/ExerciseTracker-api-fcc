const Users = require("../Models/UserModel");

const AddUser = (req, res) => {
  const { v4: uuidv4 } = require("uuid");

  const _id = uuidv4().substr(0, 6);
  const { username } = req.body;
  const newUser = { _id, username };

  Users.addUser(newUser);

  res.json(newUser);
};

const AllUsers = (req, res) => {
  res.send(Users.getUsers());
};

const AddExercises = (req, res) => {
  const { _id } = req.params;
  let { description, duration, date } = req.body;
  duration = parseInt(duration);

  const user = Users.findUser(_id);

  if (!user) return res.send("User not found.");
  if (!description) return res.send("Description is required!");
  if (!duration) return res.send("Duration is required and must be a number.");
  if (!date) {
    date = new Date().toDateString();
  } else date = new Date(date).toDateString();

  const newExercise = {
    username: user.username,
    description,
    duration,
    date,
    _id: user._id,
  };

  Users.addExerciseLog(newExercise);

  res.json(newExercise);
};

const LogsUser = (req, res) => {
  const { _id } = req.params;
  let { from, to, limit } = req.query;
  limit = parseInt(limit);
  console.log(from, to, limit);

  //if (!limit ) return res.send('Limit must be a number.')

  console.log(limit);
  const user = Users.findUser(_id, limit);

  if (!user) return res.send("User not found");

  res.send(user);
};

module.exports = { AllUsers, AddUser, AddExercises, LogsUser };
