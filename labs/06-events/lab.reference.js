(function ( $, lesson ){

lesson.events = {

	exercise_1: function () {
		// Use the click helper method when the send button is clicked
		// Note: the callback method can be empty

		$( "#compose .send" ).click( function() {
			console.log( "send button clicked" );
		});
	},

	exercise_2: function ( callback ) {
		// Respond to the click event on the refresh button and inside the event
		//   1. Invoke this exercise's callback method (its just a function called 'callback' 
		//      that's passed into this exersices function) and pass the value of the 
		//			refresh count dropdown
		//   2. console.log the same value for viewing in devtools

		$( "#compose .refresh" ).click( function() {
			var count = $( "#compose .refreshCount" ).val();
			console.log( count );
			callback( count );
		});
	},

	exercise_3: function ( callback ) {
		// Add a click event to the tweets unordered list
		//  1. Invoke this exercise's callback method and pass the string "ul"
		//  2. console.log "clicked ul" for viewing in devtools
		// Note: test this in your browser clicking anywhere on the text of a tweet (not on a link) & looking in devtools

		$( "#tweets" ).click( function() {
			console.log( "clicked ul" );
			callback( "ul" );
		});
	},

	exercise_4: function () {
		// When the user clicks on the username links, keep the page
		// from redirecting to twitter

		$( "#tweets .user-name" ).click( function( e ) {
			e.preventDefault();
		});
	},

	exercise_5: function() {
		//remove only the click event handers from the .user-name anchors

		$( "#tweets .user-name" ).off( "click" );
	},

	exercise_6: function() {
		// When someone clicks on a tweet username link, both prevent a redirect and prevent the click event on
		// #tweets <ul> from firing.

		// Complete this task by using two event object methods

		$( "#tweets .user-name" ).click( function( e ) {
			e.preventDefault();
			e.stopPropagation();
		});
	},

	exercise_7: function() {
		// -- DO NOT EDIT --
		lesson.helpers.clickUserName = function( e ) { console.log( "clicking on the userName" ); };
		// -- /DO NOT EDIT --

		// Add a click event When someone clicks on a tweet username link, using the bind method,
		// that uses lesson.helpers.clickUserName as the callback

		$( "#tweets .user-name" ).on( "click", lesson.helpers.clickUserName );
	},

	exercise_8: function() {
		// Remove only the event handler that you added in the previous exercise

		$( "#tweets .user-name" ).off( "click", lesson.helpers.clickUserName );
	}

};

}( jQuery, window.lesson = window.lesson || {} ));