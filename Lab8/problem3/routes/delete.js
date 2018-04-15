/**
 * Created by Sulav on 7/5/17.
 */

var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();

// Handling post request
router.post('/', function (req, res, next) {
    const id = req.body.id;
    const db = req.db;

    const doc = {_id: ObjectId(id)};

    db.lab8.remove(doc, function (err, removed) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(JSON.stringify({'success': 'false', 'message': 'Unable to delete location!'}));
        else res.send(JSON.stringify({'success': 'true', 'message': 'Location deleted successfully!'}));
    });
});

module.exports = router;