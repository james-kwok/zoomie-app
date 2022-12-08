exports.up = function (knex) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('breed').notNullable();
    table.string('img').notNullable();
    table.string('bio').notNullable();
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('dogs');
};
