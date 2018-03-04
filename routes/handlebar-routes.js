var authRoutes = require('./auth-routes.js');

module.exports = function(app) {

	app.use('/auth', authRoutes);

	app.get("/", function(req, res){
		res.render("index");
	});

};