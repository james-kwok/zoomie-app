const { v4: uuidv4 } = require('uuid');

const dogs = require('../seed_data/dogs_data.json');
const dogsData = dogs.map((dog) => ({
  ...dog,
  dog_id: uuidv4(),
}));

exports.seed = function (knex) {
  return knex('dogs')
    .del()
    .then(function () {
      return knex('dogs').insert(dogsData);
    });
};
