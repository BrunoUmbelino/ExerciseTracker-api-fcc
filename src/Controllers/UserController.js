const { v4: uuidv4 } = require("uuid");
const Users = require("../Models/UserModel");

const AddUser = (req, res) => {
  const { v4: uuidv4 } = require("uuid");

  const _id = uuidv4().substr(0, 8);
  const { username } = req.body;

  Users.addUser(newUser);

  res.json(newUser);
};

const AllUsers = (req, res) => {
  console.log(Users);
  res.json({ users: Users });
};

const LogsUser = (req, res) => {
  res.send("Some logs here :D");
};

module.exports = { AllUsers, AddUser, LogsUser };
