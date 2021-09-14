const Users = [];

const AddUser = (req, res) => {
  const { v4: uuidv4 } = require("uuid");

  const _id = uuidv4().substr(0, 8);
  const { username } = req.body;

  const newUser = { _id, username };
  Users.push(newUser);

  res.json(newUser);
};

const AllUsers = (req, res) => {
  res.json({ users: Users });
};

const AddExercises = (req, res) => {
  const _id = req.params._id;
  res.send(`id: ${_id} and Exercises`);
};

const LogsUser = (req, res) => {
  res.send("Some logs here :D");
};

module.exports = { AllUsers, AddUser, AddExercises, LogsUser };
