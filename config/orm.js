var connection = require('./connection.js');

var orm = {


	isEaten: function(table, cb){
		
			var queryString = "SELECT * FROM " + table + " where devoured = '1'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				return cb(res);
			});  // end of selecting eaten burgers.
		
	},  // end of isEaten ORM

	isNotEaten: function(table, cb){
		
			var queryString = "SELECT * FROM " + table + " where devoured = '0'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				return cb(res);
			});	//end of selecting not eaten burgers
	}, // end of isNotEaten ORM
	addBurger: function(table, newBurger, cb) {
		
		console.log("table: " +table);
		console.log('newBurger: ' +newBurger); 

			//var queryString = 'INSERT INTO ' + table + ' set ? {burger_name: "' + newBurger +'", devoured: "0" }';

			var queryString = "INSERT INTO burgers SET ?', {burger_name: '"+newBurger + "', devoured: '0'}";
			console.log('queryString: ' + queryString); 
			connection.query("INSERT INTO burgers SET ?", {burger_name: newBurger, devoured: '0'}, function(err, res) {
				if (err) throw err; 
					return cb(res);
			}) // end of insert connection query
	}, //end of addBurger ORM

	devourBurger: function(id, cb){

		console.log('id: ' + id);

		connection.query("UPDATE burgers SET devoured = ? where id = ?", ['1', id], function (err, res) {
			if (err) throw err;
			return cb(res);
		}) // end of "devour"/update connection query
	} // end of devourBurger ORM
}; // end of ORM

module.exports = orm;