const express = require("express");
const app = express();
const People = require("./Router/People");
var cors = require("cors");
const unAuthRoute = require("./unAuthRoute");
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/login/person", People);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// app.use(express.static("./methods-public"));

// app.get("/login/person", (req, res) => {
//   res.json(people);
// });

// app.post("/login/person", (req, res) => {
//   const { name } = req.body;

//   const searchPerson = people.find((person) => person.name === name);

//   if (name && searchPerson) {
//     return res
//       .status(400)
//       .send(`Name: ${name}" already present cannot add new person to the list`);
//   }

//   if (name && !searchPerson) {
//     const peopleLength = people.length;
//     let finalId = people.slice(peopleLength - 1);
//     const newId = finalId[0].id + 1;
//     people.push({ id: Number(newId), name });

//     return res.status(201).json(people);
//   }

//   res.status(401).send("Please Provide Credentials");
// });

// app.put("/login/person/query", (req, res) => {
//   const { name } = req.body;
//   const { id, newName } = req.query;
//   let newPeople;
//   const searchPersonWithId = people.find((person) => person.id === Number(id));
//   const searchPersonWithName = people.find(
//     (person) => person.name.toLowerCase() === newName.toLowerCase()
//   );

//   if (!newName) return res.status(401).send("Please Edit value");
//   if (newName && searchPersonWithName) {
//     return res
//       .status(400)
//       .send(`Name: ${name}" already present cannot add new person to the list`);
//   }
//   if (newName && searchPersonWithId) {
//     newPeople = people.map((person) => {
//       if (person.id === Number(id)) {
//         person.name = newName;
//         return person;
//       }
//       return person;
//     });
//     console.log(people);
//     return res.status(200).json({ success: true, data: newPeople });
//   }

//   if (!searchPersonWithId) {
//     return res.status(401).json({ success: false, data: "No data" });
//   }
//   // console.log({ name, id, searchPersonWithId, newPeople });
// });

// app.delete("/login/person/:id", (req, res) => {
//   const { id } = req.params;
//   const searchPersonWithId = people.find((person) => person.id === Number(id));
//   if (!searchPersonWithId) {
//     return res
//       .status(401)
//       .json({ success: false, data: `No data found with id ${id} to delete` });
//   }

//   people = people.filter((person) => person.id !== Number(id));

//   return res.status(200).json({ success: true, data: people });
// });

app.all("*", unAuthRoute);

app.listen(5000, () => console.log("started server at port 5000"));
