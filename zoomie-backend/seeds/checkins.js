const checkinsData = [
  {
    id: 1,
    dog_id: 2,
    location_id: 1,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 2,
    dog_id: 3,
    location_id: 1,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 3,
    dog_id: 1,
    location_id: 6,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 4,
    dog_id: 5,
    location_id: 2,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 5,
    dog_id: 2,
    location_id: 3,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 6,
    dog_id: 3,
    location_id: 5,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 7,
    dog_id: 1,
    location_id: 4,
    created_at: '2022-12-05 00:00:01',
  },
  {
    id: 8,
    dog_id: 5,
    location_id: 3,
    created_at: '2022-12-05 00:00:01',
  },
];

exports.seed = function (knex) {
  return knex('check-ins')
    .del()
    .then(function () {
      return knex('check-ins').insert(checkinsData);
    });
};
