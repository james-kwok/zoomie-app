const users = require('../seed_data/users_data.json');
const usersData = users.map((users) => ({
  ...users,
}));

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(usersData);
    });
};