var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const db = req.db;

    db.lab8.find({}).toArray(function (err, dataArray) {
        res.render('index', {'locations': dataArray});
    });
});

module.exports = router;
