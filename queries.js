const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

const getAllInfo = () => {
  return knex
    .from("book_author")
    .join("books", "book_author.book_id", "=", "books.id")
    .join("authors", "book_author.author_id", "=", "authors.id")
};

const getAllBooks = () => {
  return knex
  .from("book_author")
  .join("books", "book_author.book_id", "=", "books.id")
  .join("authors", "book_author.author_id", "=", "authors.id")
  .select("book_author.book_id", "book_author.author_id", "books.title", "books.cover", "books.genre", "books.description", "authors.authorFirst", "authors.authorLast")
}

const getAllAuthors = () => {
  return knex
  .from("book_author")
  .join("books", "book_author.book_id", "=", "books.id")
  .join("authors", "book_author.author_id", "=", "authors.id")
  .select("book_author.book_id", "book_author.author_id", "authors.authorFirst", "authors.authorLast", "authors.portrait", "authors.bio", "books.title")
}

module.exports = {

  getAllInfo,
  getAllBooks,
  getAllAuthors

}