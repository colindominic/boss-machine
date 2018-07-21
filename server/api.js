const express = require('express');
const apiRouter = express.Router();

//Minions Router
const minionsRouter = require('./minions.js');
app.use('/minions', minionsRouter);

//Ideas Router
const ideasRouter = require('./ideas.js');
app.use('/ideas', ideasRouter);

//Meetings Router
const meetingsRouter = require('./meetings.js');
app.use('/meetings', meetingsRouter);

module.exports = apiRouter;
