var express = require('express');
var router = express.Router();
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile("public/html/notepad.html")
});

router.get('/angular_example', function(req, res) {
  res.sendfile("public/html/notepad_angular_example.html")
});

router.get('/notes_json', function(req, res) {
  var db = req.db;
  db.collection('notes').find().toArray(function (err, notes) {
    res.json(notes);
  });
});

router.post('/notes_json', function(req, res) {
  var db = req.db;
  var note = req.body;
  console.log("hi");
  db.collection('notes').insert(note, function(err, result) {
    res.send(
      (err === null) ? { msg: "" } : { msg: err }
      );
  });
});

router.post('/notes_delete', function(req, res) {
  var db = req.db;
  var id = req.body.id;
  console.log("deleting: ", id);
  db.collection('notes').remove({_id: ObjectID(id)}, function(err, result) {
    res.send(
      (err === null) ? { msg: "" } : { msg: err }
      );
  });
});


module.exports = router;
