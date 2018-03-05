var Twitter = require("twitter");

var twitterKeys = {
  consumer_key: 'dkwToGh1uUYl7GBrkrJu0n3MQ',
  consumer_secret: 'l4eao34oeb96tA63JZHYlDEoYcOLmLQ0VLDBYIdvR7nSEReUoh',
  access_token_key: '2807407982-N87cdI46rKU3GPDMzv5VC6sxmEuZxZzoN2OyXMW',
  access_token_secret: 'dEhzJED4AYvCAnCccq0FkpsT8tBbea5MCeNR9mpJlq1fX'
}


var twitterClient = new Twitter(twitterKeys);
var twitterParams = {screen_name: 'Warriors', count: "20"};

twitterClient.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {
    if (error) {
      console.log(error);
    }else {
      var data = "";
      tweets.forEach(function(tweet){
        data += ""  
        +"====================================================="
        + "\nTweeted at - " + tweet.created_at
        + "\nTweet Text - " + tweet.text
        + "\n=====================================================\n";
      });
      console.log(data);
      
    }
});


var Instagram = require("instagram")


{
    "access_token": "fb2e77d.47a0479900504cb3ab4a1f626d174d2d",
    "user": {
        "id": "1574083",
        "username": "snoopdogg",
        "full_name": "Snoop Dogg",
        "profile_picture": "..."
    }
}

}




var Stubhub = require("stubhub");

var stubhubKeys {

Application Token: '64a2a266-6c7a-3092-ab63-08453aa9fa6b',
Consumer Key: '1sofM52NIkKWQNxYLeneFoezTaYa',
Consumer Secret: 'DOWD8VCBXJNMfPf5NpUrNMbXcKka'
}

var stubhubKeys = function(){

  var Client = new Stubhub (stubhubKeys)
  var stubhubParams = ( user_name: "" , events: 10)
};

stubhubKeys.get( 'user.event', stubhubParams, error response ) 
if error{
  console.log(error);
};
else { var data: "";

}