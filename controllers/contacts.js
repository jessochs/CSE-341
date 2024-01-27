const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({_id: userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0])
    });
};

const getNew = async (req, res, next) => {

  const newAddition = await db.collection('contacts').insertOne([
    {
      "_id" : "122335",
      "firstName" : "David",
      "lastName" : "Facer",
      "email" : "facerdave@cei.edu",
      "favoriteColor" : "blue",
      "birthday" : "July 13, 1968"
    }
  ])
  res.status(204);

}
const toDelete = {"id" : "65ac81000ba1eeb77fb86341"};
db.collection('contacts').deleteOne(toDelete, function(err, obj) {
  if (err) 
  throw err;

  console.log("Contact has been deleted");
  db.close();
  res.status(200);
});


module.exports = { getAll, getSingle, getNew };