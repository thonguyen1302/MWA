/**
 * Created by Sulav on 7/4/17.
 */

var express = require('express');
var router = express.Router();

/* GET add location page. */
router.get('/', function (req, res, next) {
    res.render('add');
    // res.render('index', { title: 'Location Management System' });
});


// Handling post request
router.post('/', function (req, res, next) {
    const name = req.body.name;
    const category = req.body.category;
    const lat = req.body.latitude;
    const long = req.body.longitude;

    const db = req.db;

    const doc = {
        'name': name,
        'category': category,
        'coords': [parseFloat(long), parseFloat(lat)]
    };

    db.lab8.insert(doc, function (err, docInserted) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(JSON.stringify({'success': 'false', 'message': 'Unable to insert location!'}));
        else res.send(JSON.stringify({'success': 'true', 'message': 'Location inserted successfully!'}));
    });
});

module.exports = router;