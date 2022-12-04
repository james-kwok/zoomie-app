const { v4: uuidv4 } = require('uuid');

const locations = require('../seed_data/locations_data.json');
const locationsData = locations.map((location) => ({
  ...location,
  location_id: uuidv4(),
}));

exports.seed = function (knex) {
  return knex('locations')
    .del()
    .then(function () {
      return knex('locations').insert(locationsData);
    });
};
