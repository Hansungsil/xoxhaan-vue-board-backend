var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// mysql db connection
var mysqlDB = require('./mysql-db/mysqlDB');
var port = 3306;
mysqlDB.connect();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var boardRouter = require('./routes/board');

var app = express();

app.listen(port, function(){
  console.log("http://localhost:" + port);
});

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router
app.use('/', indexRouter);
app.use('/api/login', loginRouter);
app.use('/api/board', boardRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.use(require('connect-history-api-fallback')());

setInterval(function () {
  mysqlDB.query('SELECT 1');
}, 5000);

module.exports = app;
