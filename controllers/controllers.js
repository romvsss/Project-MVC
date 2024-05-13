const Exercise = require('../models/Exercise');

let exercises = [
    new Exercise('Ławka płaska', 100, 10, 5),
    new Exercise('Siady ze sztanga', 160, 10, 5),
    new Exercise('Martwy ciąg', 180, 5, 5),
    new Exercise('Wiosło sztangą', 80, 10, 4),
    new Exercise('Bicepsy sztanga', 40, 7, 4)
];

const addExercise = (req, res) => {
    const { name, weight, reps, sets } = req.body;
    const newExercise = new Exercise(name, weight, reps, sets);
    exercises.push(newExercise);
    res.redirect('/');
}

const editExercise = (req, res) => {
    const id = req.params.id;
    const { name, weight, reps, sets } = req.body;
    exercises[id].name = name;
    exercises[id].weight = weight;
    exercises[id].reps = reps;
    exercises[id].sets = sets;
    res.redirect('/');
}

const deleteExercise = (req, res) => {
    const id = req.params.id;
    exercises.splice(id, 1);
    res.redirect('/');
}

const renderExercises = (req, res) => {
    res.render('exercisesList', { exercises: exercises })
}

const renderEditExercise = (req, res) => {
    const id = req.params.id;
    const exercise = exercises[id];
    res.render('edit-exercise', { exercise: exercise, index: id })
}

module.exports = {
    addExercise,
    editExercise,
    deleteExercise,
    renderExercises,
    renderEditExercise
}