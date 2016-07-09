var express = require('express');
var bodyParser = require('body-parser');
var html = require('../views/index.handlebars');
var orm = require('../config/orm.js');
var app = express();


// Creating Routes
module.exports = function(app) {


    // app.get will retrieve data from the database (using ORM).  
    // each set of data (eaten or not eaten burgers) is saved as notDevoured or devoured.
    // that data is rendered onto the index page.
    app.get('/', function(req, res) {
        orm.isNotEaten('burgers', function(data) {
            notDevoured = data;

            orm.isEaten('burgers', function(data) {
                devoured = data;
                res.render('index', { eaten: devoured, notEaten: notDevoured })
            });
        });
    })

    // /create page using app.post is used to send data into the database as a new Burger.
    // the index page is to be re-rendered with the newly added burger.
    app.post('/create', function(req, res) {
        orm.addBurger('burgers', req.body.burger, function(data) {
            res.redirect('/');
        })
    })

    // /update page using app.post is used to change and existing "burger" to "devoured"
    // the index page is re-rendered with the new changes to that burger
    app.post('/update', function(req, res) {
        orm.devourBurger(req.body.id, function(data) {
            res.redirect('/');
        })


    });
}
