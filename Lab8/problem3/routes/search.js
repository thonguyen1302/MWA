/**
 * Created by Sulav on 7/4/17.
 */

var express = require('express');
var router = express.Router();

/* Load search page. */
router.get('/', function (req, res, next) {
    res.render('search');
    // res.render('index', { title: 'Location Management System' });
});

router.post('/', function (req, res, next) {
    const name = req.body.name;
    const category = req.body.category;
    const longitude = parseFloat(req.body.longitude);
    const latitude = parseFloat(req.body.latitude);

    const db = req.db;

    db.lab8.createIndex({'coords': '2d'});
    db.lab8.find({
        $and: [
            {'coords': {$near: [longitude, latitude]}},
            {'name': {$regex: name, $options: 'i'}},
            {'category': {$regex: category, $options: 'i'}}
        ]
    }).limit(3).toArray(function (err, dataArray) {
        res.setHeader('Content-Type', 'application/json');
        res.send(dataArray);
    });

});

module.exports = router;