var util = require('util.js')

var sessionChecker = (req, res, next) => {
    if (req.session && req.session.user && req.cookies.user_sid) {
        res.redirect('/wishlists');
    } else {
        next();
    }
};

module.exports = function(app) {
    app.get('/login', (req, res) => {
        res.render('login', { userId: req.cookies.user_sid })
    });

    // session checker for everything
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

    app.post('/login', (req, res, next) => {
        if (req.body.username && req.body.password) {
            var req.session.user = util.authenticate(req.body.username, req.body.password)
            if (req.session.user != 'FAIL') {
                res.redirect('/wishlists')
                var req.cookie('user_sid', util.generateId(req.session.user))
            } else
                res.redirect('/login')
        }
    })

    app.get('/wishlists', (req, res, next) => {
        res.render('wishlists', {
            userId: req.session.user,
            users: util.getLists(req.session.user)
        })
    })
}