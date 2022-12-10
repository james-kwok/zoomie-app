const bcrypt = require('bcrypt');

const hashedPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const usersData = [
  {
    id: 1,
    email: 'James@example.com',
    password: hashedPassword('password'),
  },
  {
    id: 2,
    email: 'sharon@example.com',
    password: hashedPassword('password'),
  },
];

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(usersData);
    });
};
