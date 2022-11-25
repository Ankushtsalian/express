const express = require("express");
const app = express();

const server = app.get("/", (req, res) => {
  res.end("helloWORLD");
});

server.listen(5000, () => console.log("start"));
