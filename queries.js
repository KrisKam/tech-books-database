const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

getAllBooks = () => {
  return knex
    .select()
    .from("books")
    .orderBy("id", "desc")
};

getAllAuthors = () => {
  return knex
    .select()
    .from("authors")
    .orderBy("id", "desc")
}

module.exports = {

  getAllBooks,
  getAllAuthors

}