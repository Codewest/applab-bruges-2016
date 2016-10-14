var passport = require('passport'),
	accounts = require('../accounts/accountmanager');

module.exports = function() {

	passport.serializeUser(function(account, done) {
		done(null, account);
	});

	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

};
