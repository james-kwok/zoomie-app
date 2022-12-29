const db = require('knex')(require('../knexfile'));

const getCheckIns = async (req, res) => {
  try {
    const checkins = await db
      .select('*')
      .from('check-ins')
      .join('dogs', 'dogs.id', '=', 'check-ins.dog_id');
    res.status(200).json(checkins);
  } catch (error) {
    res.status(404).json({
      message: 'Check-ins are not available.',
    });
  }
};

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
    const dogId = await db
      .select('id')
      .from('dogs')
      .where('user_id', '=', req.userData.id);
    const checkins = await db('check-ins').insert({
      dog_id: dogId[0].id,
      location_id: req.body.location_id,
      status: req.body.status,
    });
    res
      .status(201)
      .json({ message: 'Check-in created successfully.', checkins });
  } catch (error) {
    res.status(400).json({
      message: 'Check-in was not registered.',
    });
  }
};

const updateCheckIns = async (req, res) => {
  try {
    const checkins = await db('check-ins')
      .select('*')
      .where({ dog_id: req.userData.id, location_id: req.body.location_id })
      .update({
        status: req.body.status,
      });
    res
      .status(201)
      .json({ message: 'Check-in updated successfully', checkins });
  } catch (error) {
    res.status(400).json({
      message: 'Check-in was not updated.',
    });
  }
};

module.exports = {
  getCheckIns,
  getCheckedInDogs,
  postCheckIn,
  updateCheckIns,
};
