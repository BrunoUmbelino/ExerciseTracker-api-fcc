const Users = [
  { _id: "12fsdf", username: "Bruno" },
  { _id: "453rfd", username: "Joãozinho" },
];

const addUser = (newUser) => {
  Users.push(newUser);
};

const findUser = () => {
  console.log(_id.toString());
  return Users.find((user, _id) => {
    console.log(user);
    return user._id === _id;
  });
};

module.exports = { Users, findUser, addUser };
