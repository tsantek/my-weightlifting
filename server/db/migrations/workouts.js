
exports.up = function(knex) {
    return knex.schema.createTable('workouts', table => {
      table.increments('id')
      table.string('name')
      table.string('img')
      table.integer('program_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('workouts')
  };
  