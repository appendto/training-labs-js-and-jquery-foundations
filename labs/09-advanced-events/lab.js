(function ( $, lesson ){

var actionsMarkup = "<div class='actions'><span class='favorite'>Favorite</span><span class='retweet'>Retweet</span><span class='reply'>Reply</span></div>";

lesson.advancedEvents = {

	exercise_1: function () {
		// 1. append the actions markup above to each tweet's content div
		// 2. delegate mouseenter & mouseleave events to the #tweets container for the tweets
		// 3. inside the single event handler, toggle the highlight class to/from the tweet <li>


	},

	exercise_2: function () {
		// delegate a click event handler to the document for the refresh button and
		// 1. build up a new tweet
		//     you can use the following code to grab HTML for 1 new tweet
		//     lesson.helpers.template( lesson.data.tweetFormat, lesson.data.tweets[ 0 ] );
		// 2. append the same .actions markup from the previous exercise to the .content
		//     located in the new tweet markup
		// 3. append the new tweet to the #tweets & verify the delegate events from exercise_1 operate normally


	}
};

}( jQuery, window.lesson = window.lesson || {} ));