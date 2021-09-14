const Users = [
  { _id: "12fsdf", username: "João" },
  { _id: "453rfd", username: "Maria" },
];

const addUser = (newUser) => {
  Users.push(newUser);
};

const findUser = (_id) => {
  return Users.find((user) => user._id === _id);
};

const getAllUsers = () => {
  return Users;
};

module.exports = { findUser, addUser, getAllUsers };
