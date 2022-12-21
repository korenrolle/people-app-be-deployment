const express = require('express');
const router = express.Router();

// import model (People)
const { People } = require('../models');

const db = require('../models'); // db.People
// const People = require('../models/People')

console.log(People);

// Routes
// http://localhost:4000/people/
router.get('/', async (req, res) => {
  // res.status(200).json({message: "people index/get route"})
  try {
    const allPeople = await People.find({});
    res.status(200).json(allPeople);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/people/
router.post('/', async (req, res) => {
  // console.log('post route', req.body)
  // res.status(201).json({message: "people create/post route"})

  try {
    //
    const newPerson = await People.create(req.body);
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/people/:id - GET
router.get('/:id', async (req, res) => {
  // res.status(200).json({message: "people show/get route /people/"+req.params.id})
  try {
    const foundPerson = await People.findById(req.params.id);
    res.status(200).json(foundPerson);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/people/:id - DELETE
router.delete('/:id', async (req, res) => {
  // res.status(200).json({message: "people destroy/delete route /people/"+req.params.id})
  try {
    const deletedPerson = await People.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPerson);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/people/:id - PUT
router.put('/:id', async (req, res) => {
  // res.status(200).json({message: "people update/put route /people/"+req.params.id})
  try {
    const updatedPerson = await People.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
