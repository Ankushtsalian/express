const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
// const js = readFileSync("./navbar-app/index.html");
const css = readFileSync("./navbar-app/styles.css");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(css);
    res.end();
  }
});

server.listen(5000, () => console.log("start"));
