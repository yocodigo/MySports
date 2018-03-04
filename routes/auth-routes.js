var router = require('express').Router(); 
var passport = require('passport');

//auth login
router.get('/login', function(req, res){
	res.render('login');
});

router.get('/logout', function(req, res){
	res.send('logging out');
});

//auth with google and passport
router.get('/google', passport.authenticate('google',{
	scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), function(req, res){
	res.send("You've Reached the Callback URI");
});


module.exports = router; 