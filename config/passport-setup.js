var passport = require('passport'); 
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys.js');
// Requiring our Fans and GoogleUser model
var db = require("../models");
// console.log()
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
		callbackURL: '/auth/google/redirect',
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	},
	function(accessToken, refreshToken, profile, done){
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
				      		done(null, newGoogleUser);
			    		});
					}
				})
			}
		});
	})
);