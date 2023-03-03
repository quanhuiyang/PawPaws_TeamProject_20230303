const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// 1. 引用routes 資料夾下的程式
const indexRouter = require('./routes/index');
const shopRouter = require('./routes/shop');
const hotelRouter = require('./routes/hotel');
const activityRouter = require('./routes/activity');
const membersRouter = require('./routes/members');
const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 2. 路由設定
//http://localhost:3000/
app.use('/', indexRouter);

//http://localhost:3000/shop
app.use('/shop', shopRouter);

//http://localhost:3000/hotel
app.use('/hotel',hotelRouter);

//http://localhost:3000/activity
app.use('/activity',activityRouter);

//http://localhost:3000/members
app.use('/members', membersRouter);


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
