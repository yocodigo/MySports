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
        
      });
      console.log(data);
     // we gotta go profile page and put outcome into front page
    }
});

var instagram = require('instagram').createClient('af8f6cb5d8f0480d80c9b03e10e3cf92', '14c737de62324f37b06a9c22935bafd1');

instagram.tags.search('nba', function (tags, error) { console.log(tags)});



// var ig = require('instagram-node').instagram();
 
// // Every call to `ig.use()` overrides the `client_id/client_secret` 
// // or `access_token` previously entered if they exist. 
// ig.use({ access_token: 'YOUR_ACCESS_TOKEN' });
// ig.use({ client_id: 'af8f6cb5d8f0480d80c9b03e10e3cf92',
//          client_secret: '14c737de62324f37b06a9c22935bafd1' });

// app.post('/like/:media_id', function(req, res, next) {
//   var ig = require('instagram-node').instagram({});
//   ig.use({ access_token: 'YOUR_ACCESS_TOKEN' });
 
//   ig.add_like(req.param('media_id'), {
//     sign_request: {
//       client_secret: '14c737de62324f37b06a9c22935bafd1',
//       // Then you can specify the request: 
//       client_req: req
//       // or the IP on your own: 
//       ip: 'XXX.XXX.XXX.XXX'
//     }
//   }, function(err) {
//     // handle err here 
//     return res.send('OK');
//   });
// });
      
    



