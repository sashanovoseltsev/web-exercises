var constructThumbDiv = function(imageData) {
	var image = "<img src='" + imageData.thumbnail + "' />";
	var author = "<p>" + imageData.author + "</p>";
	var title = "<p>" + imageData.title + "</p>";

	var thumbDiv = "<div class='thumb-card'>" + image + title + author + "</div>";
	return thumbDiv;
}


$('.btn').click(function() {
	$('.content').text('Loading...');

	$.ajax({
		type:'GET',
		url:"https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",

		success: function(response) {
			var content = $('.content');
			content.html('');

			for (var i = 0; i < response.data.children.length; i++) {
				var childData = response.data.children[i].data;
				var childDiv = constructThumbDiv(childData);
				content.append(childDiv);
			}

		}

	});
});