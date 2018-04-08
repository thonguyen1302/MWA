/**
 * Created by Sulav on 7/3/17.
 */

var express = require('express');
var router = express.Router();
var url = require('url');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    res.render('thankyou', {email: url_parts.query.email});
});

module.exports = router;