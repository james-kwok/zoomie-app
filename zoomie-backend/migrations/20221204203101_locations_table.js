exports.up = function (knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.decimal('latitude', [10], [8])
    table.decimal('longitude', [10], [8])
    table.string('name').notNullable();
    table.string('img').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('locations');
};
