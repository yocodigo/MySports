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
	}
}
module.exports = helperFunctions;