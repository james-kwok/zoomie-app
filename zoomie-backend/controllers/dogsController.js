const db = require('knex')(require('../knexfile'));

const getDogList = async (req, res) => {
  try {
    const dogs = await db('dogs');
    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json({
      message: 'Dogs not found.',
    });
  }
};

const getSingleDog = async (req, res) => {
  try {
    const dog = await db('dogs').where({ id: req.params.id });
    res.status(200).json(dog[0]);
  } catch (error) {
    res.status(404).json({
      message: 'Dog not found.',
    });
  }
};

const getUserDog = async (req, res) => {
  try {
    const userDog = await db('dogs').where({ user_id: req.userData.id });
    if (userDog.length === 0) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
    res.status(200).json(userDog);
  } catch (error) {
    res.status(400).json({
      message: 'Dog profile is not available.',
    });
  }
};

module.exports = {
  getDogList,
  getSingleDog,
  getUserDog,
};
