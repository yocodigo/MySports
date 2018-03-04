var router = require('express').Router(); 
var passport = require('passport');
// Requiring our Fans and GoogleUser model
var db = require("../models");

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
	res.redirect('/profile/');
});

router.get('/signup', function(req,res){
	res.render('SignUpPage', req.user);
}); 

/*router.post('/signup', function(req,res){

});*/

module.exports = router; 