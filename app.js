const express = require("express");
const path = require("path");
const app = express();

const homePage = "./navbar-app/index.html";
const homeStyles = "./navbar-app/styles.css";
const homeImage = "./navbar-app/logo.svg";
const homeLogic = "./navbar-app/browser-app.js";

app.get("/", (req, res) => {
  // res.send("<h1>HOME PAGE</h1>");
  res.sendFile(path.resolve(__dirname, homePage));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, homeStyles));
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path.resolve(__dirname, homeImage));
});

app.get("/browser-app.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, homeLogic));
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => console.log("start"));
