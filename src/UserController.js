const { validationResult } = require("express-validator");
const Users = require("./UserModel");
const { v4: uuidv4 } = require("uuid");

const GetAllUsers = (req, res) => {
  res.send(Users.getUsers());
};

const AddUser = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const _id = uuidv4().substr(0, 6);
  const { username } = req.body;

  const newUser = { _id, username };

  Users.addUser(newUser);

  res.json(newUser);
};

const AddExercises = (req, res) => {
  const errors = validationResult(req);
  const { _id } = req.params;
  let { description, duration, date } = req.body;

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const user = Users.findUser(_id);
  if (!user) return res.send("User not found.");

  if (date) {
    date = new Date(date + "T00:00:01").toDateString();
  } else date = new Date().toDateString();

  const LognewExercise = {
    username: user.username,
    description,
    duration,
    date,
    _id: user._id,
  };

  Users.addExerciseLog(user, LognewExercise);
  res.json(LognewExercise);
};

const LogsUser = (req, res) => {
  const { _id } = req.params;
  let { from, to, limit } = req.query;
  const errors = validationResult(req);
  let userLogs = {};

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const user = Users.findUser(_id);
  if (!user) return res.send("User not found.");

  if (from != undefined) from = new Date(from);
  if (to != undefined) to = new Date(to);

  userLogs = Users.getLogsBetweenDatesAndLimit(user, from, to, limit);

  res.send(userLogs);
};

module.exports = {
  GetAllUsers,
  AddUser,
  AddExercises,
  LogsUser,
};
