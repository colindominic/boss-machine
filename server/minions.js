const express = require('express');

import getAllFromDatabase from '/db.js';

const minionsRouter = express.Router();

const minions = [];
minions = getAllFromDatabase('minions');

//Get all Minions
minionsRouter.get('/', (req, res, next) => {
  res.send(minions);
});

module.exports = minionsRouter;
