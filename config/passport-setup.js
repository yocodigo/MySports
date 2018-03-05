var passport = require('passport'); 
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys.js');
// Requiring our Fans and GoogleUser model
var db = require("../models");

passport.serializeUser(function(googleUser, done){
	done(null, googleUser.id);
});

passport.deserializeUser(function(id, done){
	db.GoogleUser.findById(id).then(function(googleUser){
		done(null, googleUser);
	});
});


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
		db.Fan.findOne({
			where: {
				googleID: profile.id
			}
		}).then(function(currentFan){
			//If there is a fan 
			if(currentFan){
				console.log(currentFan);
				db.GoogleUser.findOne({
					where: {
						googleID: profile.id
					}
				}).then(function(currentGoogleUserAndFan){
					console.log("The current Google User is " + currentGoogleUserAndFan);
					done(null, currentGoogleUserAndFan);
				})
			}else{
				db.GoogleUser.findOne({
					where: {
						googleID: profile.id
					}
				}).then(function(currentGoogleUser){
					if(currentGoogleUser){
						done(null, currentGoogleUser);
					}
					else{
						db.GoogleUser.create({
				    		userName: profile.displayName,
				    		googleID: profile.id
				    	}).then(function(newGoogleUser) {
				     		// We have access to the new todo as an argument inside of the callback function
				      		console.log("A new Google User was created " + newGoogleUser);
				      		done(null, newGoogleUser);
			    		});
					}
				})
			}
		});
	})
);