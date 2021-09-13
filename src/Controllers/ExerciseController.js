//todo - 
// tenho que pegar o _id do formulário e colocar como parâmetro da URL


const AddExercises = (req, res) => {
    const {_id} = req.params
    const {description, duration, date} = req.body;

    const newExercise = {description, duration, date, _id}

    res.json(newExercise);
  };
  
module.exports = {AddExercises}