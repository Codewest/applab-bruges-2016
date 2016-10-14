var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // DEVELOPMENT WITHOUT AUTH
    res.render('index', { title: 'Applab' });

    // PRODUCTION WITH AUTH
    /*if(isAuthenticated(req)) {
        res.render('index', { title: 'Applab' });
    } else {
        res.render('login', { title: 'Applab' });
    }*/
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Applab' });
});

var isAuthenticated = function(req) {
    return req.user !== undefined;
};

module.exports = router;
