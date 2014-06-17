(function ( $, lesson ){

lesson.methods = {

	exercise_1: function() {
		// show the header element

		$( "header" ).show();
	},

	exercise_2: function () {
		// 1. select the notification element,
		//    note: use chaining to perform all these steps in one long statement
		// 2. add the "update" class
		// 3. show the element slowly

		$( "#notification" ).addClass( "update" ).show( "slow" );

		// Instead of chaining your could cache the selection and use variable
		// var $notification = $( "#notification" );
		// $notification.addClass( "update" );
		// $notification.show( "slow" );

		// Don't do this because it repeats the selection twice
		// $( "#notification" ).addClass( "update" )
		// $( "#notification" ).show( "slow" );
	},

	exercise_3: function () {
		// Hide all of the time-stamps

		$( "#tweets .tweet .time-stamp" ).hide();
		//$('body > #tweets > ul > li.tweet ...')

		// $( ".tweet .time-stamp" ).hide();
		// $( ".time-stamp" ).hide();
	},

	exercise_4: function () {
		// 1. start from selecting all the tweets and then...
		//    note: use the find() and end() methods to help you chain this exercise in one long statement
		// 2. find the time-stamps
		//    a. change their "font-variant" to "small-caps"
		//    b. show them "fast"
		// 3. grab the full-names and add the class "subtle" to them

		$( ".tweet" ).find( ".time-stamp" )
			.css( "font-variant", "small-caps" )
			.show( "fast" )
			.end()
		.find( ".full-name" )
			.addClass( "subtle" );

		// Show how you can use an object to pass multiple styles to css method
		// var color = "blue",
		// 	myStyles = {
		// 		"font-variant": "small-caps",
		// 		color: "red"
		// 	};
		// $( ".tweet" ).find( ".time-stamp" )
		// 	.css( myStyles )
		// 	.show( "fast" )
		// 	.end()
		// .find( ".full-name" )
		// 	.addClass( "subtle" );
	}

};

}( jQuery, window.lesson = window.lesson || {} ));