const Users = [
  { _id: "12fsdf", username: "Bruno" },
  { _id: "453rfd", username: "Joãozinho" },
];

const addUser = (newUser) => {
  Users.push(newUser);
};

const findUser = (_id) => {
  const id = _id.toString();

  return Users.find((user, id) => {
    console.log(typeof id);
    console.log(typeof user._id);


    return user._id === id;
  });
};

module.exports = { Users, findUser, addUser };
