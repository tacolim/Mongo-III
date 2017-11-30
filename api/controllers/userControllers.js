const mongoose = require('mongoose');

const User = require('../models/userModels');


const STATUS_USER_ERROR = 422;

/* Fill in each of the below controller methods */
const createUser = (req, res) => {
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

const newUser = (req, res) => {
  const { id } = req.body;
  User.find({ '_id': id }, (err, user) => {
    if (err) {
        res.status(500).json(err);
    }
    res.json(user);
  });
};

const loginPage = (req, res) => {
  const { username, password } = req.body;
  User.find({ username, password }, (err, foundUser) => {
    if (err) {
      res.status(500).json(err);
    }
    res.json(foundUser);
  });
};

const login = (req, res) => {
  const { id } = req.body;
  User.find({ '_id': id }, (err, user) => {
    if (err) {
        res.status(500).json(err);
    }
    res.json(user);
  });
};

module.exports = {
  createUser,
  newUser,
  login,
  loginPage
};