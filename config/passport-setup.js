var passport = require('passport'); 
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys.js');
// Requiring our Todo model
var db = require("../models");

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
		//console.log("Passport GoogleStrategy Callback function was fired"); 
		//console.log(profile);
		db.Fan.create({
    		name: profile.displayName,
    		email: "example@gmail.com",
    		googleID: profile.id,
    		city: "exampleCity"
    	}).then(function(dbFan) {
     	// We have access to the new todo as an argument inside of the callback function
      		console.log("A new fan was created " + dbFan);
    	});

	})
);