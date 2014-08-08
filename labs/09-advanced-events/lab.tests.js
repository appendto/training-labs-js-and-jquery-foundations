module( "Advanced Events", {
	setup: function() {

	},
	teardown: function() {

	}
});

test( "Exercise 1", function() {
	var firstTweet = $( "#tweets .tweet:first" );


	expect( 5 );

	equal( firstTweet.find( ".actions" ).length, 0, "Tweet should not have actions at the outset" );

	lesson.advancedEvents.exercise_1();

	equal( firstTweet.find( ".content .actions" ).length, 1, "Tweet should now have actions" );

	firstTweet.trigger( "mouseenter" );
	ok( firstTweet.hasClass( "highlight" ), "Tweet should have the highlight class when cursor moves onto the element" );
	ok( firstTweet.find( ".content .actions" ).is( ":visible" ), "Actions should be visible" );

	firstTweet.trigger( "mouseleave" );
	ok( !firstTweet.hasClass( "highlight" ), "Tweet should not have the highlight class when left the page" );
});

test( "Exercise 2", function() {

	expect( 5 );

	var $doc = $( document ),
		button = $( ".refresh" ),
		events = $doc.data( "events" ),
		clickEvents = ( events && events.click ? events.click.length : 0 ),
		originalTweetsCount = $( ".tweet" ).length,
		lastTweet;

	lesson.advancedEvents.exercise_1();
	lesson.advancedEvents.exercise_2();

	events = $doc.data( "events" );

	equal( events && events.click ? events.click.length : 0, clickEvents + 1, "There should be one new click event." );

	button.trigger( "click" );

	equal( $( "#tweets .tweet" ).length, originalTweetsCount + 1, "There should be a new tweet added." );

	lastTweet = $( "#tweets .tweet:last" );

	lastTweet.trigger( "mouseenter" );
	ok( lastTweet.hasClass( "highlight" ), "Tweet should have the highlight class when cursor moves onto the element" );
	ok( lastTweet.find( ".content .actions" ).is( ":visible" ), "Actions should be visible" );

	lastTweet.trigger( "mouseleave" );
	ok( !lastTweet.hasClass( "highlight" ), "Tweet should not have the highlight class when left the page" );

});