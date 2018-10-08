
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
  .createTable("bookAuthor", (entry) => {
    entry.increments("id").primary();
    entry.integer("book_id");
    entry.foreign("book_id").references(books.id).onDelete("CASCADE");
    entry.integer("author_id");
    entry.foreign("author_id").references(authors.id).onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("bookAuthor")
  .dropTableIfExists("authors")
  .dropTableIfExists("books")
};
