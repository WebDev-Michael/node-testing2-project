/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table.increments();
    table.string('quote_text', 360).unique().notNullable();
    table.string('author', 128).defaultTo('unknown')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes')
};
