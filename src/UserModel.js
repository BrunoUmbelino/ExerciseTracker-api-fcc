const Users = [
  {
    _id: "12fsdf",
    username: "João",
    count: 3,
    log: [
      {
        description: "test1",
        duration: 10,
        date: "Mon Jan 01 2017",
      },
      {
        description: "test2",
        duration: 25,
        date: "Mon Jan 01 2019",
      },
      {
        description: "test3",
        duration: 45,
        date: "Mon September 01 2021",
      },
    ],
  },
  { _id: "453rfd", username: "Maria", count: 0, log: [] },
  {
    _id: "90fxqh",
    username: "Joaquin",
    count: 0,
    log: [
      {
        description: "run",
        duration: 12,
        date: "Mon September 01 2021",
      },
    ],
  },
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

const findUser = (_id) => {
  const user = Users.find((user) => user._id === _id);
  return user;
};

const getUsers = () => {
  return Users.map((el) => {
    return { _id: el._id, username: el.username };
  });
};

const addExerciseLog = (user, LognewExercise) => {
  const log = {
    description: LognewExercise.description,
    duration: LognewExercise.duration,
    date: LognewExercise.date,
  };

  user.log.push(log);
  user.count += 1;
};

const getLogsBetweenDatesAndLimit = (user, from, to, limit) => {
  if (from !== undefined && to !== undefined) {
    let logsFilteredByDate = user.log.filter((log) => {
      const logParsedToDate = new Date(log.date);
      const fromParsedDate = new Date(from);
      const toParsedDate = new Date(to);
      return (
        logParsedToDate >= fromParsedDate && logParsedToDate <= toParsedDate
      );
    });
    user.log = logsFilteredByDate;
  }

  if (typeof limit != undefined) {
    user.log = user.log.slice(0, limit);
  }

  return user;
};

module.exports = {
  findUser,
  addUser,
  getUsers,
  addExerciseLog,
  getLogsBetweenDatesAndLimit,
};
