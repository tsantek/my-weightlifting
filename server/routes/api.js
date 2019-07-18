var express = require('express');
var router = express.Router();
const { getAllPrograms, getProgram, getProgramWorkouts, addNewProgram, editProgram } = require('../controllers/programs')
const { getWorkoutExercises } = require('../controllers/workouts')
const { getAllExercises, getExercise } = require('../controllers/exercises')

/* PROGRAMS */
router.get('/programs', getAllPrograms)
router.get('/programs/:id', getProgram)
router.get('/programs/:id/workouts', getProgramWorkouts)
router.post('/programs', addNewProgram)
router.patch('/programs/:id', editProgram)

/* WORKOUTS */
router.get('/workouts/:id/exercises', getWorkoutExercises)

/* EXERCISES */
router.get('/exercises', getAllExercises)
router.get('/exercises/:id', getExercise)

module.exports = router;
