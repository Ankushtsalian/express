const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HOME PAGE</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => console.log("start"));
