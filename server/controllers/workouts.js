const knex = require("../db/knex.js");

exports.getWorkoutExercises = async function(req, res) {
    const exercises = await knex('exercises').where('workout_id', req.params.id)
    res.json(exercises)
}