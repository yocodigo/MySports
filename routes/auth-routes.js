var router = require('express').Router(); 

//auth login
router.get('/login', function(req, res){
	res.render('login');
});

router.get('/logout', function(req, res){
	res.send('logging out');
});

//auth with google 
router.get('/google', function(req, res){
	res.send('logging in with google');
});

module.exports = router; 