const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("This is a test");
});


app.listen(port, () => console.log(`Listening on port ${port}`));