var Twitter = require("twitter");

var twitterKeys = {
  consumer_key: 'dkwToGh1uUYl7GBrkrJu0n3MQ',
  consumer_secret: 'l4eao34oeb96tA63JZHYlDEoYcOLmLQ0VLDBYIdvR7nSEReUoh',
  access_token_key: '2807407982-N87cdI46rKU3GPDMzv5VC6sxmEuZxZzoN2OyXMW',
  access_token_secret: 'dEhzJED4AYvCAnCccq0FkpsT8tBbea5MCeNR9mpJlq1fX',
}


var twitterClient = new Twitter(twitterKeys);
var twitterParams = {screen_name: 'Warriors', count: "20"};

twitterClient.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {
    if (error) {
      console.log(error);
    }else {
      var data = "";
      tweets.forEach(function(el){
        data += ""  
        +"====================================================="
        + "\nTweeted at - " + el.created_at
        + "\nTweet Text - " + el.text
        + "\n=====================================================\n";
      });
      console.log(data);
      
    }
});


var probasketballapi = require("probasketballapi")

var probasketballapiKeys= {

consumer_key: 'aUzFocEQCWLJBZ4N9RD5VqM31X8fbrlO',

}

var probasketballClient = new ProBaskeball(proKeys);
var proParams = { }

//<?php

//$url = 'https://probasketballapi.com/teams';

//$api_key = '__YOUR__API__KEY__';

//$query_string = 'api_key='.$api_key.'&team_abbrv=BOS';

//$ch = curl_init();

//curl_setopt($ch, CURLOPT_URL, $url);
///curl_setopt($ch, CURLOPT_POSTFIELDS, $query_string);
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

//$result = curl_exec($ch);

//curl_close($ch);

//echo $result;

//?>
