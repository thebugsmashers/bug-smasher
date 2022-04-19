require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getBugs, createBug } = require('./controllers/bugController.js')
const { createUser } = require('./controllers/userController.js')

const app = express();

const PORT = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/')));

app.get('/', async (req, res) => {
  return res.send('success!')
})

app.post('/user', createUser, (req, res) => {
  return res.status(200).send('Successfully created user!')
})

// fetch all bugs from the database
app.get('/bug', getBugs,async (req, res) => {
  return res.status(200).send(res.locals.bugs)
})

// add new bug to the database
app.post('/bug', createBug, (req, res) => {
  return res.status(200).send('bug successfully added!')
})

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = err;

  console.error(err);
  res.status(err.status || 500).send(res.locals.message);
});

app.listen(PORT, (err) => {
  console.log(new Date(), err || 'server listening on port '  + PORT);
});

module.exports = app;