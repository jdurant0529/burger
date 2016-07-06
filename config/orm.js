var connection = require('./connection.js');

var orm = {


	isEaten: function(){
		return new Promise(function(resolve, reject){
			var queryString = "SELECT * FROM burgers where devoured = '1'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				//console.log(res);
				return resolve(res);
			});
		})
	},

	isNotEaten: function(){
		return new Promise(function(resolve, reject){
			var queryString = "SELECT * FROM burgers where devoured = '0'";
			connection.query(queryString, function(err, res){
				if (err) throw err;
				//console.log(res);
				return resolve(res);
			});
		})
	}

	// insertOne: function(table, newObject){
	// 	return new Promise(function(resolve, reject){
	// 		var queryString = 'INSERT INTO '+table+' SET ?'; 
	// 		connection.query(queryString, newObject, function(err, res) {
 //      			if (err) throw err;
 //      			//console.log(res);
 //      			return resolve(res);
 //    		});
 //    	});	
	// },
	
};

module.exports = orm;