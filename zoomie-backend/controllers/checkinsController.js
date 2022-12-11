const db = require('knex')(require('../knexfile'));

const getCheckedInDogs = async (req, res) => {
  try {
    const checkins = await db
      .select('*')
      .from('check-ins')
      .where('location_id', '=', req.params.id)
      .join('dogs', 'dogs.id', '=', 'check-ins.dog_id');
    res.status(200).json(checkins);
  } catch (error) {
    res.status(404).json({
      message: 'Check-ins are not available.',
    });
  }
};

const postCheckIn = async (req, res) => {
  try {
    const checkins = await db('check-ins').insert({
      dog_id: req.body.dog_id,
      location_id: req.body.location_id
    });
    res.status(201).json({checkins})
  } catch (error) {
    res.status(400).json({
      message: 'Check-in was not registered.',
    });
  }
};

module.exports = {
  getCheckedInDogs,
  postCheckIn
};
