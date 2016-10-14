var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    accounts = require('../accounts/accountmanager'),
    serialize = require('./serialize');

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback/"
},  function(accessToken, refreshToken, profile, done) {
        accounts.login(profile, function() {
            return done(null, profile);
        });
    }
));

serialize();

module.exports = passport;
