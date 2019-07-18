
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('workouts').del()
      .then(function () {
        // Inserts seed entries
        return knex('workouts').insert([
          
          
        ]);
      });
  };
  