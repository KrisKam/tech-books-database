
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("books", (book) => {
    book.increments("id").primary();
    book.string("title");
    book.string("genre");
    book.text("description");
    book.string("cover")
  })
  .createTable("authors", (author) => {
    author.increments("id").primary();
    author.string("authorFirst");
    author.string("authorLast");
    author.text("bio");
    author.string("portrait")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("authors")
  .dropTableIfExists("books")
};
