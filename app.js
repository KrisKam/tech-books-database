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


app.listen(port, () => console.log(`Listening on port ${port}`));