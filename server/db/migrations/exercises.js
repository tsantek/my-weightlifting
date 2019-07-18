
exports.up = function(knex) {
    return knex.schema.createTable('exercises', table => {
      table.increments('id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('exercises')
  };
  