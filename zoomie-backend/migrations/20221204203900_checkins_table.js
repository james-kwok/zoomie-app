exports.up = function (knex) {
    return knex.schema.createTable('check-ins', (table) => {
      table.uuid('check-ins_id').primary();
      table
        .uuid('dog_id')
        .references('dog_id')
        .inTable('dogs')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .uuid('location_id')
        .references('location_id')
        .inTable('locations')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('check-ins');
  };
  