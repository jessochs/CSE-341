// const express = require('express');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const mongodb = require('../db/connect');
// const contactRoutes = require('./routes/contact');
// const app = express();


// const port = process.env.PORT || 3000;

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Acess-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/contact', contactRoutes)

//   mongodb.initDb((err, mongodb) => {
//     if (err) {
//       console.log(err);
//     }else {
//       app/addListener(port);
//       console.log(`Connected to DB and listening on ${port}`);
//     }
//   });

// app.use('/', require('./routes'));

// app.listen(process.env.PORT || port, () => {
//   console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
// });