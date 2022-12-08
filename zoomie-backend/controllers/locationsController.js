const db = require('knex')(require('../knexfile'));

const getLocationsList = (req, res) => {
  db('locations')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).send(`Error retrieving locations ${error}`);
    });
};

const getSingleLocation = (req, res) => {
  db('locations')
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Location with id: ${req.params.id} is not found`);
      }
      res.status(200).json(data[0]);
    })
    .catch((error) => {
      res
        .status(400)
        .send(`Error retrieving location ${req.params.id} ${error}`);
    });
};

module.exports = {
  getLocationsList,
  getSingleLocation,
};
