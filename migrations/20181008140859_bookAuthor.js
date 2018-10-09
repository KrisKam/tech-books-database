
exports.up = function(knex, Promise) {
  return knex.schema.createTable("book_author", (entry) => {
    entry.integer("book_id").references("books.id").onDelete("CASCADE");
    entry.integer("author_id").references("authors.id").onDelete("CASCADE");
    entry.primary(["book_id", "author_id"])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("book_author")
};
