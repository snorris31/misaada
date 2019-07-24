var mysql = require("mysql");
var express = require("express");
var app = express();
var router = express.Router();
var users = require("./routes/user");
console.log(mysql);
app.use(function(req, res, next){
      res.locals.connection = mysql.createConnection({
       host     : 'localhost',
       user     : 'root',
       password : 'pass',
       database : 'db'
     });
     console.log(res.locals.connection);
     res.locals.connection.connect();
     });

app.use('/new', users);
// error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var http = require('http');
module.exports = app;
var server = http.createServer(app);
server.listen(4007);