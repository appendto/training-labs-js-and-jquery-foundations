module( "Methods", {
	setup: function() {

	},
	teardown: function() {

	}
});

test( "Exercise 1", function() {
	var header = $( "header" );

	expect( 2 );

	ok( header.is( ":hidden" ), "The header is hidden initially" );

	lesson.methods.exercise_1();

	ok( header.is( ":visible" ), "The header is now visible" );
});

test( "Exercise 2", function() {
	var notification = $( "#notification" );

	expect( 4 );

	ok( !notification.hasClass( "update" ), "", "The notification doesn't have the update class initially" );
	ok( notification.is( ":hidden" ), "The notification is hidden initially" );

	lesson.methods.exercise_2();

	ok( notification.hasClass( "update" ), "The notification has the update class" );
	ok( notification.is( ":visible" ), "The notification is now visible" );
});

test( "Exercise 3", function() {
	var timestamps = $( ".time-stamp" );

	expect( 2 );

	ok( timestamps.is( ":visible" ), "The time stamps are visible initially" );

	lesson.methods.exercise_3();

	ok( timestamps.is( ":hidden" ), "The time stamps are now hidden" );
});

test( "Exercise 4", function() {
	var timeStamps = $( ".tweet .time-stamp" ),
		fullNames = $( ".tweet .full-name" );

	expect( 6 );

	lesson.methods.exercise_3();

	equal( timeStamps.css( "font-variant" ), "normal", "The time stamps font-variant is normal initially" );
	ok( timeStamps.is( ":hidden" ), "The time stamps are initially invisible" );
	ok( !fullNames.hasClass( "subtle" ), "The full names don't initially have the subtle class" );

	lesson.methods.exercise_4();

	equal( timeStamps.css( "font-variant" ), "small-caps", "The time stamps font-variant is small-caps" );
	ok( timeStamps.is( ":visible" ), "The time stamps are visible after the animation ends" );
	ok( fullNames.hasClass( "subtle" ), "The full names now have the subtle class" );
});

