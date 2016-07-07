var express = require('express');
var bodyParser = require('body-parser');
var html = require('../views/index.handlebars');
var orm = require('../config/orm.js');
var app = express();


// Creating Routes
module.exports = function(app) {

// var devoured;
// var notDevoured;

app.get('/', function(req, res) {
    orm.isNotEaten('burgers', function(data) {
        console.log('data in isnot eaten: ' + data);
        notDevoured = data;
        console.log('notDevoured inside isNotEaten: ' + notDevoured);

        orm.isEaten('burgers', function(data) {
            console.log('data inside isEaten' + data);
            devoured = data;
            console.log('devoured inside isEaten: ' + devoured);
            console.log('not devoured after app.gets: ' + notDevoured);
            console.log('devoured after app.gets: ' + devoured);
            res.render('index', { eaten: devoured, notEaten: notDevoured })
        });
    });
})

app.post('/create', function(req, res) {
    var body = req.body
    console.log(body);
    //console.log(burger);
    orm.addBurger('burgers', req.body.burger, function(data) {
        console.log('stuff was done.');
        res.redirect('/');
    })
})

app.post('/update', function(req, res) {
    console.log(req.body);
    orm.devourBurger(req.body.id, function(data) {
        res.redirect('/');
    })


});
}