var authRoutes = require('./auth-routes.js');
// var profileRoutes = require('./profile-routes.js');
var fanRoutes = require('./fan-routes.js');
var eventsRoutes = require('./events-routes.js');
var messageRoutes = require('./message-routes.js');
<<<<<<< HEAD
var indexRoutes = require('./index-routes.js')

module.exports = function(app) {

	// app.get("/", function(req, res){
	// 	res.render("index", {user: req.user});
	// });

	app.use('/', indexRoutes);
=======
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

module.exports = function(app) {

	app.get("/", function(req, res){

		res.render("index", {user: req.user});
	});

	app.get("/signin", authCheck, function(req, res){
		console.log("You're in signin route");
		db.Fan.findOne({
				where: {
					googleID: req.user.googleID
				}
			}).then(function(dbFan){
				//If the Fan is in the database

				if(dbFan){
					console.log(dbFan);
					res.render("index", dbFan.dataValues);

				}
				else{
					//otherwise they must signup
					return res.redirect('/auth/signup');
				}
		});
	});

>>>>>>> 24d3d982b282f8299e6b88d896fff5a29a40ead0
	//All the other routes /auth, /profile, and /api
	app.use('/auth', authRoutes);
	//app.use('/profile', profileRoutes);
	app.use('/fan', fanRoutes);
	app.use('/events', eventsRoutes);
	app.use('/messages', messageRoutes);
};
