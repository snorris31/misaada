var mysql = require("mysql");
var express = require("express");
var app = express();
bodyParser = require('body-parser');
//var router = express.Router();
var users = require("./routes/user");
var index = require("./routes/index");
//console.log(mysql);
var cors = require('cors')
app.use(cors()) 
//app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
var connection = mysql.createConnection({
       host     : 'localhost',
       user     : 'root',
       password : 'pass',
       database : 'db',
       port: '3306'
     });
     //console.log(res.locals.connection);
connection.connect();
app.get('/', function(req, res, next) {
  //console.log(res);
  console.log("!");
});
  //console.log("MADE IT", req)
app.post('/', function(req, res, next) {
  //console.log(res);
  console.log("HI");
  //res.send(req.body);
  connection.query("SELECT * FROM users WHERE username = '" + req.body.name + "'", function(error, result) {
    //res.send(result);
    if (error) {
      return error;
    } else {
      res.send(result);
    }
  });
  //console.log("MADE IT", req);
})
app.get('/users', function(req, res, next) {
  //console.log(res);
  console.log("WE'RE HERE!");
  console.log(req.query['username']);
  connection.query("SELECT isOrg FROM users WHERE username='" + req.query['username'] + "';", function(error, result) {
      console.log("result", result);
      res.send(result);
  });
  //console.log("MADE IT", req);
})
//router.post('/user', function(req, res, next) {
    //res.locals.connection.query('INSERT INTO users VALUES (' + user + ", " + pass + ", " + isOrg + ")", function (error, result) {
//      console.log("MADE IT", res);
//    });

// error handler
app.listen(app.get('port'), () => {console.log('Server is running on', app.get('port'))});