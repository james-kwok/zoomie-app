exports.up = function (knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.string('address').notNullable();
    table.string('name').notNullable();
    table.string('img').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('locations');
};
