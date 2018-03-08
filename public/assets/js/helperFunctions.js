var db = require("../../../models");
var Twitter = require("twitter");
var twitterKeys = require("../../../config/keys.js").twitterKeys;
var twitterClient = new Twitter(twitterKeys); 

var helperFunctions = {
	findUser: function(id, callback){
		db.GoogleUser.findById(id).then(function(googleUser){
			db.Fan.findOne({
				where: {
					googleID: googleUser.googleID
				}
				}).then(function(currentFan){
					callback(currentFan);
			});
		});
	}, 
	getDate: function(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		//var yyyy = today.getFullYear();
		if(dd < 10) {
		    dd = '0'+ dd
		} 
		if(mm<10) {
		    mm = '0'+ mm
		} 
		return {day: dd, month: mm};
	}
}


module.exports = helperFunctions;