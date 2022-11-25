const express = require("express");
const app = express();
const logger = require("./logger");

app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
