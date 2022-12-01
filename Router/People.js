const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPeople,
  addPeople,
  deletePeople,
} = require("../controlers/people");

router.get("/", getPeople);

router.post("/", createPeople);

router.put("/query", addPeople);

router.delete("/:id", deletePeople);

module.exports = router;
