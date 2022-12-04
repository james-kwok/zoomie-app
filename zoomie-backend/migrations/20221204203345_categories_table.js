exports.up = function (knex) {
  return knex.schema.createTable('categories', (table) => {
    table.uuid('category_id').primary();
    table.string('category').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories');
};
