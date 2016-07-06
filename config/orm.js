var connection = require('./connection.js');

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
    	return new Promise(function(resolve, reject) {
	        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

	        connection.query(queryString, [valOfCol], function(err, result) {
	            resolve(result);
	        });
    	});
    }
};

module.exports = orm;