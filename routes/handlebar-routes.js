var authRoutes = require('./auth-routes.js');
var profileRoutes = require('./profile-routes.js');
var apiRoutes = require('./api-routes.js');
var eventsRoutes = require('./events-routes.js');

module.exports = function(app) {

	app.get("/", function(req, res){
		res.render("index", {user: req.user});
	});
	//All the other routes /auth, /profile, and /api
	app.use('/auth', authRoutes);
	app.use('/profile', profileRoutes);
	app.use('/api', apiRoutes);
	app.use('/events', eventsRoutes);
};