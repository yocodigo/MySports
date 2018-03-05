var authRoutes = require('./auth-routes.js');
var profileRoutes = require('./profile-routes.js');
var apiRoutes = require('./api-routes.js');

module.exports = function(app) {

	app.use('/auth', authRoutes);
	app.use('/profile', profileRoutes);
	app.use('/api', apiRoutes);

	app.get("/", function(req, res){
		res.render("index");
	});
};