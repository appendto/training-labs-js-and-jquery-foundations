(function ( $, lesson ){

lesson.selectors = {

	/*
		Important! The result of each of these funcitons
		needs to be returned so they can be verified.

		Please return your selection like this:

			return $( "yourselector" );

		Some of the answers may be better using .find().
		Even in this case, return it the same way:

			return $( "something" ).find( "somethingelse" );
	*/

	exercise_1: function () {
		// Select the header element from the test page

		return $( "header" );
	},

	exercise_2: function () {
		// Select the first tweet on the page

		return $( "#tweets .tweet:first" );
		
		// return $( "#tweets li.tweet:first" );
		// return $( "#tweets > .tweet:first" );
		// return $( ".tweet:first" );
		// return $( ".tweet:eq( 0 )" );
		// return $( "li.tweet:first" );
	},

	exercise_3: function () {
		// Select the last tweet on the page

		return $( "#tweets .tweet:last" );
	},

	exercise_4: function () {
		// Select both the first and last tweet on the page

		return $( "#tweets" ).find( ".tweet:first, .tweet:last" );

		// return $( "#tweets .tweet:first, .tweet:last" );
		// return $( ".tweet:first, .tweet:last" );
	},

	exercise_5: function() {
		// Select all of the tweets with the data-user-name of jcreamer898

		return $( ".tweet[data-user-name='jcreamer898']" );
	},

	exercise_6: function() {
		// Select all of the tweets that data-user-name ends with the letter s

		return $( ".tweet[data-user-name$='s']" );
	}
	
};

}( jQuery, window.lesson = window.lesson || {} ));