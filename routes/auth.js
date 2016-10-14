var express = require('express');
var router = express.Router();
var facebook = require('../lib/auth/facebook');

router.get('/facebook/', facebook.authenticate('facebook', {session: true}));

router.get('/facebook/callback/', facebook.authenticate('facebook', { failureRedirect: "/", successRedirect: "/" }));

module.exports = router;
