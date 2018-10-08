
exports.up = function(knex, Promise) {
  return knex.schema.createTable("book_author", (entry) => {
    entry.increments("id").primary();
    entry.integer("book_id");
    entry.foreign("book_id").references("id").inTable("books");
    entry.integer("author_id");
    entry.foreign("author_id").references("id").inTable("authors")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("book_author")
};
