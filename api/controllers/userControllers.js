const mongoose = require('mongoose');

const User = require('../models/userModels');


const STATUS_USER_ERROR = 422;

/* Fill in each of the below controller methods */
const newUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save()
    .then((createdUser) => {
      res.json(createdUser);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
};

const login = (req, res) => {
  const { username, password } = req.body;
  Post.find({ username, password }, (err, foundUser) => {
    if (err) {
      res.status(500).json(err);
    }
    res.json(foundUser);
  });
};


module.exports = {
  newUser,
  login
};

