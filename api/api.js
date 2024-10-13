
//Introduce Express routing module
var app = require("express").Router();
//Introduce database connection pool module
const DBPool = require('./crowdfunding_db.js')

//Route: Get a list of all fundraising activities
app.get('/getFundraisersList', (req, res) => {
    //SQL query statement used to select all fundraisers
    let searchSql = 'SELECT * from `fundraiser`'
    //Execute SQL query
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        //Return the result to the client
        res.send(result);
    })
});

//Route: Get all active fundraising activities
app.get("/getActiveFundraisers", (req, res) => {
    //Retrieve the query parameters from the request
    let param = req.query
    //SQL query statement used to select active fundraisers
    let searchSql = 'SELECT * from `fundraiser` WHERE ACTIVE = ?'
    //Execute SQL query
    DBPool.query(searchSql, [param.active], (results) => {
        //Extract query results
        let result = results.results
        //Return the result to the client
        res.send(result);
    })
});

//Routing: Obtain single or multiple fundraising activities based on conditions
app.get("/getOneFundraiser", (req, res) => {
    //Retrieve the query parameters from the request
    let param = req.query
    //Execute different SQL queries based on conditions
    if(!param.CATEGORYID && !param.FUNDRAISERID && !param.ACTIVE){
        //If CATEGORYID and FUNDRAISERID are not provided, obtain all fundraisers
        let searchSql = 'SELECT * from `fundraiser`'
        DBPool.query(searchSql, [], (results) => {
            let result = results.results
            res.send(result);
        })
    } else if(param.CATEGORYID && !param.FUNDRAISERID && !param.ACTIVE){
        //If CATEGORYID is provided, retrieve the fundraisers for that category
        let searchSql = 'SELECT * from `fundraiser` WHERE CATEGORYID = ?'
        DBPool.query(searchSql, [param.CATEGORYID], (results) => {
            let result = results.results
            res.send(result);
        })
    } else if(!param.ACTIVE && !param.CATEGORYID && param.FUNDRAISERID){
        //If FUNDRAISERID is provided, obtain the details of the fundraiser
        let searchSql = 'SELECT * from `fundraiser` WHERE FUNDRAISERID = ?'
        DBPool.query(searchSql, [param.FUNDRAISERID], (results) => {
            let result = results.results
            res.send(result);
        })
    } else if(param.ACTIVE && !param.CATEGORYID && !param.FUNDRAISERID){
        //If FUNDRAISERID is provided, obtain the details of the fundraiser
        let searchSql = 'SELECT * from `fundraiser` WHERE ACTIVE = ?'
        DBPool.query(searchSql, [param.ACTIVE], (results) => {
            let result = results.results
            res.send(result);
        })
    } else {
        //If both FUNDRAISERID and CATEGORYID are provided, query according to these two conditions
        let searchSql = 'SELECT * from `fundraiser` WHERE FUNDRAISERID = ? AND CATEGORYID = ?'
        DBPool.query(searchSql, [param.FUNDRAISERID,param.CATEGORYID], (results) => {
            let result = results.results
            res.send(result);
        })
    }
    
});

//Route: Get detailed information about a single fundraising event
app.get("/Details", (req, res) => {
    //Retrieve the query parameters from the request
    let param = req.query
    //SQL query statement used to select fundraisers who specify FUNDRAISERID
    let searchSql = 'SELECT * from `fundraiser` WHERE FUNDRAISERID = ?'
    DBPool.query(searchSql, [param.FUNDRAISERID], (results) => {
        let result = results.results
        res.send(result);
    })
});

//Route: Get a list of all fundraising categories
app.get("/List", (req, res) => {
    //SQL query statement used to select all fundraising categories
    let searchSql = 'SELECT * from `CATEGORY`'
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        res.send(result);
    })
});
//the list of donations
app.get("/getDonations", (req, res) => {
    let searchSql = 'SELECT * from `donation` order by DATE DESC'
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        res.send(result);
    })
});
//the list of donations by ByFUNDRAISERID
app.get("/getDonationsByFUNDRAISERID", (req, res) => {
    let param = req.query
    console.log(param);
    
    let searchSql = 'SELECT * from `donation` WHERE FUNDRAISERID = ? order by DATE DESC'
    DBPool.query(searchSql, [param.FUNDRAISERID], (results) => {
        let result = results.results
        res.send(result);
    })
});
//add donations
app.post("/addDonations", (req, res) => {
    let param = req.body
    var addSql =
        'INSERT INTO `donation`(`DONATION_ID`,`DATE`,`AMOUNT`,`GIVER`,`FUNDRAISERID`) VALUES(?,?,?,?,?)';
    var addSqlParams = [new Date().getTime(), param.DATE, param.AMOUNT, param.name, param.FUNDRAISERID];
    DBPool.query(addSql, addSqlParams, (results) => {
        res.send({
            res: 'success！'
        });
    })
});
// test cpanel
app.get("/", (req, res) => {
    let searchSql = 'SELECT * from `category`'
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        res.send(result);
    })
});
// delete fundraiser
app.delete('/deleteFundraiser', (req, res) => {
    let param = req.query
	DBPool.query('delete from fundraiser where FUNDRAISERID = ?', [param.FUNDRAISERID], (results) => {
		let result = results.results
		res.send({
            res: 'delete success！'
        })
	})
});
// add fundraiser
app.post('/addFundraiser', (req, res) => {
    let param = req.body
    var addSql =
        'INSERT INTO `fundraiser`(`FUNDRAISERID`,`ORGANIZER`,`CAPTION`,`TARGET_FUNDING`,`CURRENT_FUNDING`,`CITY`,`ACTIVE`,`CATEGORYID`) VALUES(?,?,?,?,?,?,?,?)';
    var addSqlParams = [ param.FUNDRAISERID, param.ORGANIZER, param.CAPTION, param.TARGET_FUNDING, param.CURRENT_FUNDING, param.CITY, param.ACTIVE, param.CATEGORYID];
    DBPool.query(addSql, addSqlParams, (results) => {
        res.send({
            res: 'success！'
        });
    })
});
// update fundraiser
app.put('/updateFundraiser', (req, res) => {
    let param = req.body
	DBPool.query('UPDATE fundraiser SET ? WHERE FUNDRAISERID = ?', [param, param.FUNDRAISERID], (results) => {
		let result = results.results
		res.send({
            res: 'success！'
        })
	})
});


//Export the app for use in other modules
module.exports = app;