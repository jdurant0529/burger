var connection = require('./connection.js');

var orm = {

	//  this query returns all burgers which have been eaten already.
	//  returns the data to burger_controller.js as cb(res). 
	isEaten: function(table, cb){
		
			var queryString = "SELECT * FROM " + table + " where devoured = '1'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				return cb(res);
			});  // end of selecting eaten burgers.
		
	},  // end of isEaten ORM

	//  this query returns all burgers which have not yet been eaten.
	//  returns the data to burger_controller as cb(res).
	isNotEaten: function(table, cb){
		
			var queryString = "SELECT * FROM " + table + " where devoured = '0'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				return cb(res);
			});	//end of selecting not eaten burgers
	}, // end of isNotEaten ORM

	// this query adds a new burger to the database with having status of devoured = false.
	// returns the data to burger_controller -- ((is this necessary?? come back later...))
	addBurger: function(table, newBurger, cb) {

			//var queryString = 'INSERT INTO ' + table + ' set ? {burger_name: "' + newBurger +'", devoured: "0" }';

			var queryString = "INSERT INTO burgers SET ?', {burger_name: '"+newBurger + "', devoured: '0'}";
			console.log('queryString: ' + queryString); 
			connection.query("INSERT INTO burgers SET ?", {burger_name: newBurger, devoured: '0'}, function(err, res) {
				if (err) throw err; 
					return cb(res);
			}) // end of insert connection query
	}, //end of addBurger ORM

	//  this query updates the selected burger to have status of devoured = 'true'
	//  returns the data to ... (again, is this necessary?)
	devourBurger: function(id, cb){

		connection.query("UPDATE burgers SET devoured = ? where id = ?", ['1', id], function (err, res) {
			if (err) throw err;
			return cb(res);
		}) // end of "devour"/update connection query
	} // end of devourBurger ORM
}; // end of ORM


// allows data to be exported as orm??  (is that right)
module.exports = orm;