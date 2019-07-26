require('normalize.css')
require('@/main.css')

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var chartrouter = require('./routes/charts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));

app.use('./', indexRouter);
app.use('./', chartrouter);



// function append() {
//   require.ensure(['jquery'], require => {
//     const $ = require('jquery')
//     $('#app').append(logo)
//   })
// }

// setTimeout(append, 0)


module.exports = app;