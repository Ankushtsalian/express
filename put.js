let { people } = require("./data");

const put = (req, res) => {
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
    console.log(people);
    return res.status(200).json({ success: true, data: newPeople });
  }

  if (!searchPersonWithId) {
    return res.status(401).json({ success: false, data: "No data" });
  }
  // console.log({ name, id, searchPersonWithId, newPeople });
};

module.exports = put;
