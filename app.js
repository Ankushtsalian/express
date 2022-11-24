const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");

const server = http.createServer((req, res) => {
  req.write(homePage);
  req.end();
});

server.listen(5000, () => console.log("start"));
