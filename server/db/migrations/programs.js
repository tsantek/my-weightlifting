
exports.up = function(knex) {
    return knex.schema.createTable('programs', table => {
      table.increments('id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs')
  };
  