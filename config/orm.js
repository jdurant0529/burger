var connection = require('./connection.js');

var orm = {


	isEaten: function(table, cb){
		
			var queryString = "SELECT * FROM " + table + " where devoured = '1'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				return cb(res);
			});
		
	},

	isNotEaten: function(table, cb){
		
			var queryString = "SELECT * FROM " + table + " where devoured = '0'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				return cb(res);
			});	
	},
	addBurger: function(table, newBurger, cb) {
		
		console.log("table: " +table);
		console.log('newBurger: ' +newBurger);

//var post  = {newBurger: newBurger, devoured: 'false'};
//console.log('post: ' + post);

// insert into burgers (burger_name, devoured) values ('What-a-burger', '0');

			//var queryString = 'INSERT INTO ' + table + ' set ? {burger_name: "' + newBurger +'", devoured: "0" }';

			var queryString = "INSERT INTO burgers SET ?', {burger_name: '"+newBurger + "', devoured: '0'}";
			console.log('queryString: ' + queryString); 
			connection.query("INSERT INTO burgers SET ?", {burger_name: newBurger, devoured: '0'}, function(err, res) {
				if (err) throw err;
					return cb(res);
			})
	}
};

module.exports = orm;