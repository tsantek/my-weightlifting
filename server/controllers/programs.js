const knex = require("../db/knex.js");

exports.getAllPrograms = async function(req, res) {
    const programs = await knex('programs')
    res.json(programs)
}

exports.getProgram = async function(req, res) {
    const program = await knex('programs').where('id', req.params.id).first().then(program => {
        res.json(program)
    })
}

exports.getProgramWorkouts = async function(req, res) {
    const workouts = await knex('workouts').where('program_id', req.params.id)
    console.log(workouts)
    res.json(workouts)
}

exports.addNewProgram = async function(req, res) {
    await knex('programs').insert(req.body).returning('*').then(program => {
        res.json(program)
    })
}

exports.editProgram = async function(req, res) {
    await knex('programs').where('id', req.params.id).update(req.body).then(() => {
        res.sendStatus(200)
    })
}