var express = require('express');
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');
var router = express.Router();

/* GET users listing with node-fetch using Promises. */
let renderData = {title: "User Management System"};

// Fetching data with node-fetch using Promises
router.get('/', function (req, res, next) {

    const dataPromise = fetch('http://jsonplaceholder.typicode.com/users/');
    dataPromise.then(response => response.json())
        .then(data => {
            renderData.table_title1 = "Fetching data with node-fetch using Promises";
            renderData.usersListPromises = data;
            next();
        })
        .catch(err => res.end(err));

});

// Fetching data with node-fetch using Reactive Programming (Observables)
router.get('/', function (req, res, next) {

    const dataPromise = fetch('http://jsonplaceholder.typicode.com/users/');
    const jsonObservable = Rx.Observable.fromPromise(dataPromise);
    jsonObservable.subscribe(promiseResponse => {

        const dataObservable = Rx.Observable.fromPromise(promiseResponse.json());
        dataObservable.subscribe(data => {
            renderData.table_title2 = "Fetching data with node-fetch using Reactive Programming (Observables)";
            renderData.usersListObservables = data;

            next();
        }, err => {
            res.end(err);
        });
    }, err => {
        res.end(err);
    });

});

// Fetching data with node-fetch using Asyns/Await
router.get('/', async function (req, res, next) {
    const dataPromise = fetch('http://jsonplaceholder.typicode.com/users/');

    try {
        let promiseResponse = await dataPromise;
        let data = await promiseResponse.json();

        renderData.table_title3 = "Fetching data with node-fetch using Async/Await";
        renderData.usersListAsyncAwait = data;

        res.render('users', renderData);

    } catch (err) {
        res.end(err);

    }
});

module.exports = router;
