(function ( $, lesson ) {

lesson.manipulation = {

	exercise_1: function() {
		// Find all the tweets and explicitly iterate over them,
		// changing each tweet's "background-color" to "green"

		$( "#tweets .tweet" ).each( function() {
			$( this ).css( "background-color", "green" );
		});

		// Mention that even though the instructions said explicitly iterate
		// that it really isn't necessary since the css method implicitly iterates
		// $( "#tweets .tweet" ).css( "background-color", "green" );
	},

	exercise_2: function() {
		// Instead of explicitly looping over each tweet as in exercise_1,
		// leverage implicit iteration over the tweets to add a "fancy" class

		$( "#tweets .tweet" ).addClass( "fancy" );
	},

	exercise_3: function () {
		// Remove all the tweets from the current list

		$( "#tweets .tweet" ).remove();

		// Here are other ways that you can remove the tweets from the list
		// $( "#tweets" ).empty();
		// $( "#tweets" ).html( "" );
	},

	exercise_4: function () {
		// -- DO NOT EDIT --
		// If you want to take a peek at these values look in common/common.js
		var tweets = lesson.data.tweets,
			getTweet = function (tweet) {
				return lesson.helpers.template(lesson.data.tweetFormat, tweet);
			}
		// -- /DO NOT EDIT --

		// The `tweets` variable above is an array of objects representing new tweets.
		// Pass each object in tweets to the getTweet function to generate
		// the markup to display the tweet. Append the new tweet markup
		// to the #tweets element.

		// This is not as performant as it could be. Why? Because it is touching DOM everytime
		$.each( tweets, function( index, tweet ) {
			$( getTweet( tweet ) ).appendTo( "#tweets" );
		});
	},

	exercise_5: function () {
		// Add a class of "alternate" to all the odd numbered tweets

		$( "#tweets .tweet:odd" ).addClass( "alternate" );
	},

	exercise_6: function () {
		// Change the placeholder attribute of the tweet textarea to "Enter tweet here"

		$( "#compose textarea" ).attr( "placeholder", "Enter tweet here" );
	},

	exercise_7: function() {
		// Get the placeholder value from the tweet textarea and return the result

		return $( "#compose textarea" ).attr( "placeholder" );
	},

	exercise_8: function() {
		// Set the value of the refresh count select box to "25"

		$( "#compose .refreshCount" ).val( "25" );
	},

	exercise_9: function() {
		// Get the value from the refresh count select box and return the result

		return $( "#compose .refreshCount" ).val();
	},

	exercise_10: function() {
		// Surround the time-stamp of each tweet with "[" and "]"
		// Note: there is an overloaded text() method that takes
		// a function that would be helpful here. Check the API.

		$( "#tweets .time-stamp" ).text( function( index, text ) {
			return "[ " + text + " ]";
		});
	}
};

}( jQuery, window.lesson = window.lesson || {} ));
