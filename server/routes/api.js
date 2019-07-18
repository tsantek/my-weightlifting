var express = require('express');
var router = express.Router();
const { getAllPrograms, getProgram, getProgramWorkouts, addNewProgram, editProgram } = require('../controllers/programs')
const { getWorkoutExercises } = require('../controllers/workouts')

/* PROGRAMS */
router.get('/programs', getAllPrograms)
router.get('/programs/:id', getProgram)
router.get('/programs/:id/workouts', getProgramWorkouts)
router.post('/programs', addNewProgram)
router.patch('/programs/:id', editProgram)

/* WORKOUTS */
router.get('/workouts/:id/exercises', getWorkoutExercises)

/* EXERCISES */


module.exports = router;
