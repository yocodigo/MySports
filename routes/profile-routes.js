var router = require('express').Router(); 
// Requiring our fans and googleUser models
var db = require("../models");

//MiddleWare to check if the user is logged in or not.
var authCheck = function(req, res, next){
	if(!req.user){
		//If the user is not logged In 
		res.redirect('/auth/login');
	}
	else{
		next();
	}
}

router.get("/", authCheck, function(req, res){
	db.Fan.findOne({
			where: {
				googleID: req.user.googleID
			}
		}).then(function(dbFan){
			//If the Fan is in the database
			if(dbFan){
				res.render("profilePage", dbFan.dataValues);
			}
			else{
				//otherwise they must signup
				return res.redirect('/auth/signup');
			}
	});
});

module.exports = router; 