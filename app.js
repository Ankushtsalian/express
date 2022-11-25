const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("helloLD");
});

app.listen(5000, () => console.log("start"));
