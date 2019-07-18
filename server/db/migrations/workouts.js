
exports.up = function(knex) {
    return knex.schema.createTable('workouts', table => {
      table.increments('id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('workouts')
  };
  