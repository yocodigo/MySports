var authRoutes = require('./auth-routes.js');
var profileRoutes = require('./profile-routes.js');
var fanRoutes = require('./fan-routes.js');
var eventsRoutes = require('./events-routes.js');
var messageRoutes = require('./message-routes.js');
var indexRoutes = require('./index-routes.js')

module.exports = function(app) {

	// app.get("/", function(req, res){
	// 	res.render("index", {user: req.user});
	// });

	app.use('/', indexRoutes);
	//All the other routes /auth, /profile, and /api
	app.use('/auth', authRoutes);
	app.use('/profile', profileRoutes);
	app.use('/fan', fanRoutes);
	app.use('/events', eventsRoutes);
	app.use('/messages', messageRoutes);
};
