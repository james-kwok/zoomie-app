const locations = require('../seed_data/locations_data.json');
const locationsData = locations.map((location) => ({
  ...location,
}));

exports.seed = function (knex) {
  return knex('locations')
    .del()
    .then(function () {
      return knex('locations').insert(locationsData);
    });
};
