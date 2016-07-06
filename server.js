// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
	var express = require('express');
	var methodOverride = require('method-override');
	var bodyParser = require('body-parser')
	var orm = require('./config/orm.js');

var app = express();

//var path = require('path');

orm.selectWhere('burgers', 'devoured', 'false').then(function(data) {
	console.log(data); //data is undefined - why?
});



// orm.selectWhere('parties', 'party-type', 'grown-up').then(function(data) {
// 	console.log(data); //data is undefined - why?
// });
var port = 3000;
app.listen(port);