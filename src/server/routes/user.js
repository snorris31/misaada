var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next) {
    res.locals.connection.query('INSERT INTO users VALUES (' + user + ", " + pass + ", " + isOrg + ")", function (error, result) {
      if (error) throw error;
      console.log("MADE IT", result);
    });
});

module.exports = router;