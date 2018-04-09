var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/mydb", function(err, database) {
  if(err) return console.error(err);

  db = database;

  // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere. 
});

// Reuse database object in request handlers
setTimeout(function() {
    app.get("/", function(req, res, next) {
        db.collection("").find({}, function(err, docs) {
          if(err) return next(err);
          docs.each(function(err, doc) {
            if(doc) {
              console.log(doc);
            }
            else {
              res.end();
            }
          });
        });
      });
}, 2000);


app.use(function(err, req, res){
   // handle error here.  For example, logging and returning a friendly error page
});

// Starting the app here will work, but some users will get errors if the db connection process is slow.  
  app.listen(3000);
  console.log("Listening on port 3000");