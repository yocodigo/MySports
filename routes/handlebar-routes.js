var authRoutes = require('./auth-routes.js');
var profileRoutes = require('./profile-routes.js');
var fanRoutes = require('./fan-routes.js');
var eventRoutes = require('./event-routes.js');
var messageRoutes = require('./message-routes.js');

module.exports = function(app) {

	app.get("/", function(req, res){
		res.render("index", {user: req.user});
	});
	//All the other routes /auth, /profile, and /api
	app.use('/auth', authRoutes);
	app.use('/profile', profileRoutes);
	app.use('/fan', fanRoutes);
	app.use('/events', eventRoutes);
	app.use('/messages', messageRoutes);
};
