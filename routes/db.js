// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/db", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

function findAll(callback){  
    global.conn.collection("livro").find({}).toArray(callback);
}
function insert(book, callback){
    global.conn.collection("livro").insert(book, callback);
}
var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("livro").find(new ObjectId(id)).toArray(callback);
}

function update(id, book, callback){
    global.conn.collection("livro").updateOne({_id:new ObjectId(id)}, book, callback);
}

function deleteOne(id, callback){
    global.conn.collection("livro").deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne, update, deleteOne }

