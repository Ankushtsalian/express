let { people } = require("./data");

const deleteMethod = (req, res) => {
  const { id } = req.params;
  const searchPersonWithId = people.find((person) => person.id === Number(id));
  if (!searchPersonWithId) {
    return res
      .status(401)
      .json({ success: false, data: `No data found with id ${id} to delete` });
  }

  people = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ success: true, data: people });
};

module.exports = deleteMethod;
