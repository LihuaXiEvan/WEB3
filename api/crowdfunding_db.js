//Introducing MySQL module for database operations
class DBPool {
	constructor() {
		//Create database connection configuration
		this.mysql = require("mysql");
		this.config = {
			host: 'localhost', 
			port: 3306, 
			user: 'root', 
			password: 'admin', 
			database: 'crowdFunding_db6',
		};
		//Create a connection pool to improve database connection efficiency
		this.pool = this.mysql.createPool(this.config);
	}

	//Execute SQL query
	query(sql, params, callBack) {
		//Retrieve a connection from the connection pool
		this.pool.getConnection((err, connection) => {
			if (err) {
				throw err;//Handling connection errors
			}
			//Execute query
			connection.query(sql, params, (err, results, fields) => {
				connection.release();
				if (err) {
					throw err;//Handling query errors
				}
				callBack && callBack({ results, fields });
			});
		});
	}
}

//Export DBPool instance
module.exports = new DBPool();