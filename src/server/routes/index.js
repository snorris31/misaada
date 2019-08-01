var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	console.log(res);
})

router.post('/user', function(req, res, next) {
    //res.locals.connection.query('INSERT INTO users VALUES (' + user + ", " + pass + ", " + isOrg + ")", function (error, result) {
      console.log("MADE IT", res);
    });

module.exports = router;