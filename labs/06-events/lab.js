(function ( $, lesson ){

lesson.events = {

	exercise_1: function () {
		// Use the click helper method to respond to when the send button is clicked
		// console.log "send button clicked" to see it in action in the console


	},

	exercise_2: function ( callback ) {
		// Respond to the click event on the refresh button and inside the event
		//   1. Invoke this exercise's callback method (its just a function called 'callback' 
		//      that's passed into this exersices function) and pass the value of the 
		//			refresh count dropdown
		//      pass the value of the refresh count dropdown to it
		//   2. console.log the same value for viewing in the console


	},

	exercise_3: function ( callback ) {
		// Add a click event to the tweets unordered list
		//  1. Invoke this exercise's callback method and pass the string "ul"
		//  2. console.log "clicked ul" for viewing in the console
		// Note: test this in your browser clicking anywhere on
		// the text of a tweet (not on a link) & looking in the console


	},

	exercise_4: function () {
		// When the user clicks on the username links, keep the page
		// from redirecting to twitter


	},

	exercise_5: function() {
		//remove only the click event handers from the .user-name anchors


	},

	exercise_6: function() {
		// When someone clicks on a tweet username link, both prevent a redirect and prevent the click event on
		// #tweets <ul> from firing.

		// Complete this task by using two event object methods


	},

	exercise_7: function() {
		// -- DO NOT EDIT --
		lesson.helpers.clickUserName = function( e ) { console.log( "clicking on the userName" ); };
		// -- /DO NOT EDIT --

		// Add a click event When someone clicks on a tweet username link, using the on method,
		// that uses lesson.helpers.clickUserName as the callback


	},

	exercise_8: function() {
		// Remove only the event handler that you added in the previous exercise


	}

};

}( jQuery, window.lesson = window.lesson || {} ));