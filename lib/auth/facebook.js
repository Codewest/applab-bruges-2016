var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    accounts = require('../accounts/accountmanager'),
    serialize = require('./serialize');

//var redirect = process.env.THETYPE === 'production' ? "https://youcant.run/auth/facebook/callback/" : "http://localhost:3000/auth/facebook/callback/";
var redirect = "https://youcant.run/auth/facebook/callback/";

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: redirect
},  function(accessToken, refreshToken, profile, done) {
        accounts.login(profile, function() {
            return done(null, profile);
        });
    }
));

serialize();

module.exports = passport;
