const express = require("express");
const app = express();
const { people } = require("./data");
var cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// app.use(express.static("./methods-public"));

app.get("/", (req, res) => {
  res.json(people);
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (name) {
    return res.status(201).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      "<div style='display:flex;justify-content: center;align:item:center'>404 Page Not Found</div>"
    );
});

app.listen(5000, () => console.log("started server at port 5000"));
