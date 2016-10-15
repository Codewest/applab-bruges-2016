var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // DEVELOPMENT WITHOUT AUTH
    //res.render('index', { title: 'Applab' });

    // PRODUCTION WITH AUTH
    if(isAuthenticated(req)) {
        res.render('index', { title: 'Prente' });
    } else {
        res.redirect('/login');
    }
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Prente' });
});

var isAuthenticated = function(req) {
    return req.session.loggedin;
};

module.exports = router;
