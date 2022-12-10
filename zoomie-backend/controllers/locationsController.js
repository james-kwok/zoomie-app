const db = require('knex')(require('../knexfile'));

const getLocationsList = async (req, res) => {
  try {
    const locations = await db('locations');
    res.status(200).json(locations);
  } catch (error) {
    res.status(404).json({
      message: 'Locations not found.',
    });
  }
};

const getSingleLocation = async (req, res) => {
  try {
    const location = await db('locations').where({ id: req.params.id });
    res.status(200).json(location[0]);
  } catch (error) {
    res.status(404).json({
      message: 'Location not found.',
    });
  }
};

module.exports = {
  getLocationsList,
  getSingleLocation,
};
