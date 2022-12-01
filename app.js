const express = require("express");
const app = express();
let { people } = require("./data");
var cors = require("cors");
const post = require("./post");
const put = require("./put");
const deleteMethod = require("./delete");
const unAuthRoute = require("./unAuthRoute");

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

app.post("/login", post);

app.put("/login/person/query", put);

app.delete("/login/person/:id", (req, res) => {
  const { id } = req.params;
  const searchPersonWithId = people.find((person) => person.id === Number(id));
  if (!searchPersonWithId) {
    return res
      .status(401)
      .json({ success: false, data: `No data found with id ${id} to delete` });
  }

  people = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ success: true, data: people });
});

app.all("*", unAuthRoute);

app.listen(5000, () => console.log("started server at port 5000"));
