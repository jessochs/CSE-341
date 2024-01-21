const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./db/connect');
const contactRoutes = require('./routes/contact');
const app = express();


const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

  mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    }else {
      app/addListener(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });