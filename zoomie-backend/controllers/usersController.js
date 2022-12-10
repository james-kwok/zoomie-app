const db = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'All fields are required.',
    });
  }

  try {
    const users = await db('users').where({ email: email });

    if (users.length !== 0) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const newUser = await db('users').insert({
      email: email,
      password: bcrypt.hashSync(password, 10),
    });

    const newUserCreated = newUser[0];
    res.status(201).json({
      message: 'User created successfully',
      user: newUserCreated,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Unable to create user',
      error,
    });
  }
};

module.exports = {
  addUser,
};
