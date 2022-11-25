const express = require("express");
const path = require("path");
const app = express();

const homePage = "./navbar-app/index.html";

app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.send("<h1>HOME PAGE</h1>");
  res.sendFile(path.resolve(__dirname, homePage));
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => console.log("start"));
