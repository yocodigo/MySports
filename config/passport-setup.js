var passport = require('passport'); 
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys.js');

passport.use(
	new GoogleStrategy(
	{
		//options for the google strategy;
		callbackURL: '/auth/google/redirect',
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	},
	function(accessToken, refreshToken, profile, done){
		//passport callback function
		console.log("Passport GoogleStrategy Callback function was fired"); 
		console.log(profile);

	})
);