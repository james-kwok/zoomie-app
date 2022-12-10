const db = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

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
        message: 'User already exists.',
      });
    }

    const newUser = await db('users').insert({
      email: email,
      password: bcrypt.hashSync(password, 10),
    });

    const newUserCreated = newUser[0];
    res.status(201).json({
      message: 'User created successfully.',
      user: newUserCreated,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Unable to create user.',
      error,
    });
  }
};

const getUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ error: 'Login requires email and password fields.' });
  }
  try {
    const users = await db('users')
      .where({ email: req.body.email });
    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid login credentials.' });
    }
    const user = users[0];
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).json({ error: 'Incorrect password.' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return res.status(200).json({
      message: 'User logged in successfully',
      token: token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error with the server', error: error });
  }
};

module.exports = {
  addUser,
  getUser,
};
