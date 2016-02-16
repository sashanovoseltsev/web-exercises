var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var tweets = [
	{ time: new Date().getTime() - 12300, text: "One of the first tweets here." }, 
	{ time: new Date().getTime() - 1500, text: "Hey, cool app!" }, 
	{ time: new Date().getTime() - 1000, text: "Haven't been here for a while." }
];

app.get("/ajax", function(req, res) {
	res.type('json');
	res.end(JSON.stringify({tweets:tweets}));
});

app.post("/ajax", function(req, res) {
	var tweetText = req.body.tweet.tweetText;
	var tweet = { text: tweetText, time: new Date().getTime() };
	tweets.push(tweet);

	res.type('json');
	res.end(JSON.stringify({tweet:tweet}));
});

var server = app.listen(8080);