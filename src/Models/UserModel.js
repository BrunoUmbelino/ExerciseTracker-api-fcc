const Users = [
  { _id: "12fsdf", username: "João", log: [] },
  { _id: "453rfd", username: "Maria", log: [] },
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

const addExerciseLog = (newExercise) => {
  const log = {
    description: newExercise.description,
    duration: newExercise.duration,
    date: newExercise.date,
  };
  
  var id = Users.findIndex((el)=>el._id === newExercise._id)

  console.log(id);
};

module.exports = { findUser, addUser, getAllUsers, addExerciseLog };
