const dogs = require('../seed_data/dogs_data.json');
const dogsData = dogs.map((dog) => ({
  ...dog,
}));

exports.seed = function (knex) {
  return knex('dogs')
    .del()
    .then(function () {
      return knex('dogs').insert(dogsData);
    });
};
