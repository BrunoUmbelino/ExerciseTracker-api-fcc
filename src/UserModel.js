const Users = [
  {
    _id: "12fsdf",
    username: "João",
    count: 3,
    log: [
      {
        description: "test1",
        duration: 60,
        date: "Mon Jan 01 1990",
      },
      {
        description: "test2",
        duration: 60,
        date: "Mon Jan 01 1990",
      },
      {
        description: "test3",
        duration: 60,
        date: "Mon Jan 01 1990",
      },
    ],
  },
  { _id: "453rfd", username: "Maria", count: 0, log: [] },
  { _id: "90fxqh", username: "Joaquin", count: 0, log: [] },
];

const addUser = (newUser) => {
  const user = {
    _id: newUser._id,
    username: newUser.username,
    count: 0,
    log: [],
  };
  Users.push(user);
};

const findUser = (_id, limit = 0) => {
  console.log(limit);

  if (limit == 0) return Users.find((user) => user._id === _id);

  const user = Users.find((user) => user._id === _id);
  user.log = user.log.slice(0, limit);
  console.log(user.log);

  return user;
};

const getUsers = () => {
  return Users.map((el) => {
    return { _id: el._id, username: el.username };
  });
};

const addExerciseLog = (newExercise) => {
  let id = Users.findIndex((el) => el._id === newExercise._id);

  const log = {
    description: newExercise.description,
    duration: newExercise.duration,
    date: newExercise.date,
  };

  Users[id].log.push(log);
  Users[id].count += 1;
  console.log(Users[id]);
};

module.exports = { findUser, addUser, getUsers, addExerciseLog };
