const db = require('knex')(require('../knexfile'));

const getDogList = (req, res) => {
  db('dogs')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).send(`Error retrieving dogs ${error}`);
    });
};

const getSingleDog = (req, res) => {
  db('dogs')
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Dog with id: ${req.params.id} is not found`);
      }
      res.status(200).json(data[0]);
    })
    .catch((error) => {
      res.status(400).send(`Error retrieving dog ${req.params.id} ${error}`);
    });
};

module.exports = {
  getDogList,
  getSingleDog,
};
