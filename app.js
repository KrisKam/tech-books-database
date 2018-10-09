const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require("./queries");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  queries.getAllInfo()
    .then(data => res.json({data: data}))
});

app.get("/books", (req, res, next) => {
  queries.getAllBooks()
    .then(books => res.json({books: books}))
});

app.get("/authors", (req, res, next) => {
  queries.getAllAuthors()
    .then(authors => res.json({authors: authors}))
});

app.post("/books", (req, res, next) => {
  queries.createBook(req.body)
    .then(book => res.json(book))
});

app.post("/authors", (req, res, next) => {
  queries.createAuthor(req.body)
    .then(author => res.json(author))
});

app.post("/", (req, res, next) => {
  let author_id
  let book_id
  queries.createAuthor(req.body)
    .then(author => author_id = author.id)
    .then (queries.createBook(req.body))
    .then(book => res.json(book))
});

app.listen(port, () => console.log(`Listening on port ${port}`));