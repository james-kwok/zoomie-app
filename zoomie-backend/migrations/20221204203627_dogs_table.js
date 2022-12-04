exports.up = function (knex) {
  return knex.schema.createTable('dogs', (table) => {
    table.uuid('dog_id').primary();
    table.string('name').notNullable();
    table.string('breed').notNullable();
    table.string('img').notNullable();
    table.string('bio').notNullable();
    table
      .uuid('user_id')
      .references('user_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('dogs');
};
