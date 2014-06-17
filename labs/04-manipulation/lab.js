(function ( $, lesson ) {

lesson.manipulation = {

	exercise_1: function() {
		// Find all the tweets and explicitly iterate (each) over them,
		// changing each tweet's CSS "background-color" to "green"

		
	},

	exercise_2: function() {
		// Instead of explicitly looping over each tweet as in exercise_1,
		// leverage implicit iteration over the tweets to add a "fancy" class

		
	},

	exercise_3: function () {
		// Remove all the tweets from the current list

		
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

		
	},

	exercise_5: function () {
		// Add a class of "alternate" to all the odd numbered tweets

		
	},

	exercise_6: function () {
		// Set the placeholder attribute of the textarea to "Enter tweet here"

		
	},

	exercise_7: function() {
		// Get the placeholder value from the textarea and return the result

		
	},

	exercise_8: function() {
		// Set the value of the refresh count select box to "25"

		
	},

	exercise_9: function() {
		// Get the value from the refresh count select box and return the result

		
	},

	exercise_10: function() {
		// Surround the time-stamp of each tweet with "[" and "]"
		// Note: there is an overloaded text() method that takes
		// a function that would be helpful here. Check the API.

		
	}
};

}( jQuery, window.lesson = window.lesson || {} ));
