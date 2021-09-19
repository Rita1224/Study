var createError = require('http-errors');
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require("cors")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())

var connection = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'Initial1',
    database:'japanese'
});


connection.connect();
var sql = 'SELECT * FROM sentences';
connection.query(sql, function (err,result) {
  if(err){
      console.log('[SELECT ERROR]:',err.message);
  }
  console.log(result); 
});


// const query=function(sql,sqlParams,callback){
//   connection.getConnection(function(err,conn){
//     if(err){
//       callback(err,null,null);
//     }else{
//       conn.query(sql,sqlParams,function(qerr,vals,fields){
//         conn.release();
//         callback(qerr,vals,fields);
//       });
//     }
//   });
// };

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
