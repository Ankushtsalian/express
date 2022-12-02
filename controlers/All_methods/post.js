let { people } = require("../../data");

const post = (req, res) => {
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
};

module.exports = post;
