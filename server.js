// uses express
var express = require('express');

// create our app
var app = express();
// uses express handlebars
var exphbs = require('express-handlebars');

// handles and transforms file paths
var path = require('path');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

// use connection.js file for connecting to and sending database requests.
var connection = require('./config/connection.js');

//app.use(bodyParser.json());

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, 'public'))); //public directory
app.use(express.static(__dirname + '/public'));

app.engine('handlebars',
    exphbs({ defaultLayout: 'main' })
);
app.set('view engine', 'handlebars');

require('./controllers/burgers_controller.js')(app);

//sets port variable
var PORT = process.env.PORT || 3000;

// listens to port and lets user know server is running on that particular port.
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});
