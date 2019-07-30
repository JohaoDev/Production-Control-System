;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diseñoTelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('diseñoTelas').insert([
        {
          id: 1, 
          diseño: 'diseño1',
          caracteristica: 'caracteristica1'
        }       
      ]);
    });
};
