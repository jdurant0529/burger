var express = require('express');
var bodyParser = require('body-parser');
var html = require('../views/index.handlebars');
//var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var app = express();


// Creating Routes
module.exports = function(app) {
var devoured;
var notDevoured;

    app.get('/', function(req, res) {
        orm.isNotEaten('burgers').then(function(data) {
            notDevoured = data;
            
        });

        orm.isEaten('burgers', 'devoured', '1').then(function(data) {
            devoured = data;
            
        });
console.log('not devoured: ' + notDevoured);
console.log('devoured: ' + devoured);
        res.render('index', { eaten: devoured, notEaten: notDevoured})
    })

}
