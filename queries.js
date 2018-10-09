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
    .select()
    .from("books")
}

const getAllAuthors = () => {
  return knex
    .select()
    .from("authors")
}

const createBook = (newBook) => {
  return knex("books")
    .insert(newBook, ["id", "title", "cover", "genre", "description"])
}

const createAuthor = (newAuthor) => {
  return knex("authors")
    .insert(newAuthor, ["id", "authorFirst", "authorLast", "portrait", "bio"])
}

module.exports = {

  getAllInfo,
  getAllBooks,
  getAllAuthors,
  createBook,
  createAuthor

}