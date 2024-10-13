//Introduce the express module
const express = require('express')
//Create an Express application instance
const app = express()
const cors = require('cors')

//Middleware: Setting CORS headers
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//Using JSON middleware to parse request body
app.use(express.json())
app.use(cors())

//Introduce user related API routing
let user = require('./api.js');
app.use(user);

//Export application instance
module.exports = app

//Set up ports and start the server
const port =4008
app.listen(port, () => {
	console.log(`app is running at http://localhost:${port}`)//Output operational information
})