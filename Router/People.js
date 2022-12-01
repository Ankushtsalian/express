const express = require("express");
const router = express.Router();
// let { people } = require("../data");
let people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
  { id: 5, name: "emma" },
];

router.put("/query", (req, res) => {
  const { name } = req.body;
  const { id, newName } = req.query;
  let newPeople;
  const searchPersonWithId = people.find((person) => person.id === Number(id));
  const searchPersonWithName = people.find(
    (person) => person.name.toLowerCase() === newName.toLowerCase()
  );

  if (!newName) return res.status(401).send("Please Edit value");
  if (newName && searchPersonWithName) {
    return res
      .status(400)
      .send(`Name: ${name}" already present cannot add new person to the list`);
  }
  if (newName && searchPersonWithId) {
    newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = newName;
        return person;
      }
      return person;
    });
    return res.status(200).json({ success: true, data: newPeople });
  }

  if (!searchPersonWithId) {
    return res.status(401).json({ success: false, data: "No data" });
  }
  // console.log({ name, id, searchPersonWithId, newPeople });
});

router.delete("/:id", (req, res) => {
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

module.exports = router;
