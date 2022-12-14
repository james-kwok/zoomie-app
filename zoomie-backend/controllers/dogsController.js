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

// using placeholder <img> until upload image feature is ready
const postDogProfile = async (req, res) => {
  try {
    console.log(req.userData)
    const userId = await db
      .select('id')
      .from('users')
      .where('id', '=', req.userData.id)
    const dogProfile = await db('dogs').select('*').insert({
      name: req.body.name,
      breed: req.body.breed,
      img: 'https://res.cloudinary.com/deu69ydvq/image/upload/v1670949565/placeholder-avatar_xe9pk4.webp',
      bio: req.body.bio,
      user_id: userId[0].id,
    });
    res.status(201).json({
      message: 'Dog profile created successfully.',
      dog: dogProfile,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Unable to create dog profile.',
      error,
    });
  }
};

module.exports = {
  getDogList,
  getSingleDog,
  getUserDog,
  postDogProfile,
};
