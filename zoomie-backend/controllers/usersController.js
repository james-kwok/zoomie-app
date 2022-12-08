const db = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');

const addUser = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send('All fields are required.');
  }
  db('users')
    .insert({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    })
    .then(() => {
      res.status(201).send('User created successfully');
    })
    .catch((error) => {
      res.status(500).send('Unable to create user');
    });
};

module.exports = {
  addUser,
};
