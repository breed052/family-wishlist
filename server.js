"use strict"
const express = require('express')
var logger = require('morgan')
var session = require('express-session');

var fs = require('fs')
var app = express()

app.use(logger('dev'))
app.set('view engine', 'ejs');
var port = process.env.PORT || 8080;
// var mongoose = require('mongoose');
// var passport = require('passport');
// var flash    = require('connect-flash');
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');


require('routes.js')(app)

app.listen(port, () => console.log(`App running on port ${port}`))