var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session');
var csrf = require('csurf');
var validator = require('express-validator');
var router = express.Router();

router.use(session({
    secret: 'session_secretOIFHDLKSJFKHBILHRY&I'
}));
router.use(bodyParser.urlencoded({extended: true}));
router.use(csrf());

router.use(function (req, res, next) {
    var token = req.csrfToken();
    res.locals.csrf = token;
    next();
});

router.use(validator());

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('newsletter', {csrf: req.csrfToken()});
});

router.post('/', function (req, res, next) {
    req.assert('email', 'A valid email is required').notEmpty().isEmail();

    var errors = req.validationErrors();

    if (errors) {
        console.log(errors);
        res.render('newsletter', {errors: errors, csrf: req.csrfToken()});

    } else {
        const email = req.body.email;

        fs.appendFile(path.join(__dirname, '/subscribers.txt'), email + "\n", function (err) {
            if (err) throw err;
            res.redirect('/thankyou?email=' + email);
        });

    }

});

module.exports = router;
