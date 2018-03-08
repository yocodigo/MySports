var router = require('express').Router(); 
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


router.get("/", function(req, res) {
   res.redirect('/auth/login');
  //res.render("index", {user: req.user});
});


router.get("/signin", authCheck, function(req, res){
	db.Fan.findOne({
			where: {
				googleID: req.user.googleID
			}
		}).then(function(dbFan){
			//If the Fan is in the database
			if(dbFan){
				res.render("index", dbFan.dataValues);
			}
			else{
				//otherwise they must signup
				return res.redirect('/auth/signup');
			}
	});
});

 module.exports = router; 
