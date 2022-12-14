const bcrypt = require('bcrypt');

const hashedPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const usersData = [
  {
    id: 1,
    email: '1@example.com',
    password: hashedPassword('password'),
  },
  {
    id: 2,
    email: '2@example.com',
    password: hashedPassword('password'),
  },
  {
    id: 3,
    email: '3@example.com',
    password: hashedPassword('password'),
  },
  {
    id: 4,
    email: '4@example.com',
    password: hashedPassword('password'),
  },
  {
    id: 5,
    email: '5@example.com',
    password: hashedPassword('password'),
  },
  {
    id: 6,
    email: '6@example.com',
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
