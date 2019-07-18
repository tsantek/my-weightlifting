
exports.up = function(knex) {
    return knex.schema.createTable('programs', table => {
      table.increments('id')
      table.string('name')
      table.string('img')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs')
  };
  