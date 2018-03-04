var router = require('express').Router(); 
// Requiring our fans and googleUser models
var db = require("../models");

var authCheck = function(req, res, next){
	if(!req.user){
		//If the user is not logged In 
		res.redirect('/auth/login');
	}
	else{
		db.Fan.findOne({
			where: {
				googleID: req.user.googleID
			}
		}).then(function(dbFan){
			if(dbFan){
				next();
			}
			else{
				console.log(req.user);
				return res.redirect('/auth/signup');
			}
		})
	}
}

router.get("/", authCheck, function(req, res){
	res.send("You are logged In " + req.user.userName);
});

module.exports = router; 