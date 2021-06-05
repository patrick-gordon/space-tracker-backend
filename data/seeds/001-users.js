
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Patrick', password: '123'},
        {username: 'Farish', password: '123'},
        {username: 'Zion', password: '123'}
      ]);
    });
};
