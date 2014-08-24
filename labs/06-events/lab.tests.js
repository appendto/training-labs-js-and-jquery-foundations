/*global test: false, expect: false, ok: false, lesson: false, equals: false, stop: false, start: false */

module( "Events", {
	setup: function() {

	},
	teardown: function() {

	}
});

test( "Exercise 1", function() {
	var events;

	lesson.events.exercise_1();

	events = $._data( $( "#compose .send" )[0], "events" );
	expect( 2 );

	ok( events, "The events object is defined" );
	ok( events.click, "A new click event has been added to the send button" );

});

test( "Exercise 2", function() {
	var refreshButton = $( "#compose .refresh" ),
		refreshDropdown = $( "#compose .refreshCount" ),
		events, buttonClicked = false, refreshCount = 0;

	lesson.events.exercise_2( function( count ) {
		buttonClicked = true;
		refreshCount = count;
	});
	refreshButton.trigger( "click" );
	events = $._data( refreshButton[0], "events" );

	ok( events && events.click, "The click event has been attached to the element" );
	ok( buttonClicked, "The event handler was triggered on the click event" );
	equal( refreshCount, "05", "The number of tweets from the dropdown were passed to the callback" );
});

test( "Exercise 3", function() {
	var tweets = $( "#tweets" ),
		events, buttonClicked = false, message;

	lesson.events.exercise_3( function( text ) {
		buttonClicked = true;
		message = text;
	});
	$( "#tweets .tweet:first" ).trigger( "click" );
	events = $._data( tweets[0], "events" );

	ok( events && events.click, "The click event has been attached to the element" );
	ok( buttonClicked, "The event handler was triggered when a click was triggered off of the 1st tweet" );
});

test( "Exercise 4", function() {
	var firstUser, events, evt;

	lesson.events.exercise_4();

	firstUser = $( "#tweets .user-name:first" );
	events    = $._data( firstUser[0], "events" );
	evt       = new $.Event( "click" );

	firstUser.trigger( evt );

	expect( 2 );
	ok( events && events.click, "A click event exists on the 1st user-name" );
	equal( true, evt.isDefaultPrevented(), "The default click event was not fired" );
});

test( "Exercise 5", function() {
	var events;

	lesson.events.exercise_4();
	events = $._data( $( "#tweets .user-name:first" )[0], "events" );
	ok( events && events.click, "There are click events present initially" );

	lesson.events.exercise_5();
	events = $._data( $( "#tweets .user-name:first" )[0], "events" );
	ok( events == null || events.click == null, "The click events have been removed" );
});

test( "Exercise 6", function() {
	var parentTriggered = false, userName, events;

	lesson.events.exercise_3( function() {
		parentTriggered = true;
	});

	lesson.events.exercise_6();
	userName = $( "#tweets .user-name:first" )
	events = $._data( userName[0], "events" );
	userName.trigger( "click" );

	expect( 2 );
	ok( events && events.click, "A click event exists on the 1st user-name" );
	ok( !parentTriggered, "The parent element was not fired" );
});

test( "Exercise 7", function() {
	var userName = $( "#tweets .user-name:first" ), events;

	lesson.events.exercise_7();
	events = $._data( userName[0], "events" );

	expect( 2 );
	ok( events && events.click, "There is a click event on the user-name element" );
	equal( events.click[ 0 ].handler, lesson.helpers.clickUserName );
});

test( "Exercise 8", function() {
	var userName = $( "#tweets .user-name:first" ), events;

	lesson.events.exercise_7();
	events = $._data( userName[0], "events" );

	expect( 3 );
	ok( events && events.click, "There is a click event on the user-name element" );
	equal( events.click[ 0 ].handler, lesson.helpers.clickUserName );

	lesson.events.exercise_8();
	events = $._data( userName[0], "events" );
	ok( events == null || events.click == null, "There are no click handlers for this element" );
});
