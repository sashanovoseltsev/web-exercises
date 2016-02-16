var prependTweet = function(tweet) {
	var tweetDiv = createTweetDiv(tweet);
	$('.tweeter-tweets').prepend(tweetDiv);
}

var createTweetDiv = function(tweet) {
	var timeDiv = "<div class='tweet-time'>" + new Date(tweet.time).toLocaleString() + "</div>";
	var textDiv = "<div class='tweet-text'>" + tweet.text + "</div>";
	var tweetDiv = "<div class='tweeter-container'>" + timeDiv + textDiv + "</div>";

	return tweetDiv;
}

$.ajax({
	type: "GET",
	url: "/ajax",
	success: function(response) {
		for (var i = 0; i < response.tweets.length; i++){
			prependTweet(response.tweets[i]);
		}
	}
});

$('#tweet').click(function() {	
	$.ajax({
		type: "POST",
		url: "/ajax",
		contentType: "application/json",
		data: JSON.stringify({
			tweet:{
				tweetText: $('#new-tweet').val()
			}
		}),
		success: function(response) {
			prependTweet(response.tweet);
			$('#new-tweet').val('');
		}
	});
});