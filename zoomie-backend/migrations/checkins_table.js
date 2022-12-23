exports.up = function (knex) {
  return knex.schema.createTable('check-ins', (table) => {
    table.increments('id').primary();
    table
      .integer('dog_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dogs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('location_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('locations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('status');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('check-ins');
};
