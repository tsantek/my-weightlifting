
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('programs').del()
      .then(function () {
        // Inserts seed entries
        return knex('programs').insert([
          {
            name: 'Basketball',
            img: 'https://static-s.aa-cdn.net/img/ios/1103794774/bd5f34ce26c67e002e6c0e8981e0c278?v=1'
          },
        ]);
      });
  };
  