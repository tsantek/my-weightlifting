const knex = require("../db/knex.js");

exports.getAllExercises = async function(req, res) {
    const exercises = await knex('exercises')
    res.json(exercises)
}

exports.getExercise = async function(req, res) {
    const exercise = await knex('exercises').where('id', req.params.id).first()
    res.json(exercise)
}