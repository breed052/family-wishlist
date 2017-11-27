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
//
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');


app.get('/login', (req, res) => res.render('index'));

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/wishlists');
    } else {
        next();
    }
};

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login');
});


// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

app.listen(port, () => console.log(`App running on port ${port}`))