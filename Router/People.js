const express = require("express");
const router = express.Router();
let { people } = require("../data");

router.get("/", (req, res) => {
  res.json(people);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  const searchPerson = people.find((person) => person.name === name);

  if (name && searchPerson) {
    return res
      .status(400)
      .send(`Name: ${name}" already present cannot add new person to the list`);
  }

  if (name && !searchPerson) {
    const peopleLength = people.length;
    let finalId = people.slice(peopleLength - 1);
    const newId = finalId[0].id + 1;
    people.push({ id: Number(newId), name });

    return res.status(201).json(people);
  }

  res.status(401).send("Please Provide Credentials");
});

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
