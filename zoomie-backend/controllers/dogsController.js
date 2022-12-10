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

module.exports = {
  getDogList,
  getSingleDog,
};
