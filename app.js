const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./db/connect');
// const contactRoutes = require('./routes/contacts');
const app = express();


const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

  newContact = {
    "_id" : "122335",
    "firstName" : "David",
    "lastName" : "Facer",
    "email" : "facerdave@cei.edu",
    "favoriteColor" : "blue",
    "birthday" : "July 13, 1968"
  }

app.post('/contacts', (req, res) => {
  const contact = req.body;
  console.log(contact);
  contacts.push(contact);
  res.status(201);

})

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  }else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});