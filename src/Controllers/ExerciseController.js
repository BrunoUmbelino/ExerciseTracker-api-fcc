//todo - 

const User = require("../Models/UserModel")

const AddExercises = (req, res) => {
    const {_id} = req.params
    let {description, duration, date} = req.body;
    
    const user = User.findUser(_id)
    console.log(user);
    if (!user) return res.send("User not found")

    if (!description) return res.send("Path 'description' is required!")
    if (!duration) return res.send("Path 'duration' is required!")
    if (!date) {
      date = new Date().toDateString()
    }

    const newExercise = {_id, description, duration, date }

    res.json(newExercise);
  };
  
module.exports = {AddExercises}