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
                console.log(data);
            notDevoured = data;
            console.log('inside isNotEaten: ' + notDevoured);
        });

        orm.isEaten('burgers').then(function(data) {
                console.log(data);
            devoured = data;
            console.log('inside isEaten: '+ devoured);
            
        });
console.log('not devoured: ' + notDevoured);
console.log('devoured: ' + devoured);
        res.render('index', { eaten: devoured, notEaten: notDevoured})
    })

}
