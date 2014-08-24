/*global test: false, expect: false, equals: false, ok: false, lesson: false */

module( "Manipulation", {
	setup: function() {

	},
	teardown: function() {

	}
});

QUnit.config.testTimeout = 1000;

test( "Exercise 1", function() {
	var tweets = $( "#tweets .tweet" );

	expect( 2 );

	var expectation = tweets.css( "background-color" ).indexOf("transparent") === -1 ?
		"rgba(0, 0, 0, 0)" : "transparent";

	equal( tweets.css( "background-color" ), expectation, "The background color of the tweets are transparent initially" );

	lesson.manipulation.exercise_1();

	equal( tweets.css( "background-color" ), "rgb(0, 128, 0)", "The updated background color of the tweets are green" );
});

test( "Exercise 2", function() {
	var tweets = $( "#tweets .tweet" );

	expect( 2 );

	ok( !tweets.hasClass( "fancy" ), "The tweets don't have the fancy class initially" );

	lesson.manipulation.exercise_2();

	ok( tweets.hasClass( "fancy" ), "The tweets have the fancy class" );
});


test( "Exercise 3", function() {
	var tweets = $( "#tweets" );

	expect( 2 );

	ok( tweets.find( ".tweet" ).length > 0, "The tweets unordered list has html content initially" );

	lesson.manipulation.exercise_3();

	equal( tweets.find( ".tweet" ).length, 0, "The tweets have been removed" );
});

test( "Exercise 4", function() {
	expect( 2 );

	equal( $( "#tweets .tweet" ).length, 3, "There are 3 tweets inside of the unordered list initially" );

	lesson.manipulation.exercise_4();

	equal( $( "#tweets .tweet" ).length, 8, "There are 8 (3 origional plus 5 new ones) tweets that have been added to the unordered list" );
});

test( "Exercise 5", function() {
	var tweets = $( "#tweets .tweet:odd" );

	expect( 2 );

	ok( !tweets.hasClass( "alternate" ), "The odd tweets don't have a class of alternate initially" );

	lesson.manipulation.exercise_5();

	ok( tweets.hasClass( "alternate" ), "The odd tweets do have a class of alternate" );
});

test( "Exercise 6", function() {
	var textarea = $( "#compose textarea" );

	expect( 2 );

	ok( !textarea.attr( "placeholder" ), "The textarea placeholder is empty initially" );

	lesson.manipulation.exercise_6();

	equal( textarea.attr( "placeholder" ), "Enter tweet here", "The textarea placeholder is not empty" );
});

test( "Exercise 7", function() {
	var textarea = $( "#compose textarea" ), textareaValue;

	expect( 2 );

	lesson.manipulation.exercise_6();
	textareaValue = lesson.manipulation.exercise_7();
	equal( textareaValue, textarea.attr( "placeholder" ), "The placeholder of the textarea is correct" );
	equal( textareaValue, "Enter tweet here", "The placeholder of the textarea is correct" );
});

test( "Exercise 8", function() {
	var refreshCount = $( "#compose .refreshCount" );

	expect( 2 );

	equal( refreshCount.val(), "05", "The value of the refreshCount dropdown is 5 initially" );

	lesson.manipulation.exercise_8();

	equal( refreshCount.val(), "25", "The value of the refreshCount dropdown is 25" );
});

test( "Exercise 9", function() {
	var refreshCount = $( "#compose .refreshCount" ), actualCount;

	expect( 2 );

	lesson.manipulation.exercise_8();
	actualCount = lesson.manipulation.exercise_9();
	equal( actualCount, refreshCount.val(), "The value of the refreshCount dropdown is 25" );
	equal( actualCount, "25", "The value of the refreshCount dropdown is 25" );
});

test( "Exercise 10", function() {
	var tweets = $( "#tweets .time-stamp" );

	expect( 6 );

	lesson.manipulation.exercise_10();

	tweets.each( function() {
		var text = $( this ).text();

		equal( text[ 0 ], "[", "The first character of the time stamp is [" );
		equal( text[ text.length -1 ], "]", "The last character of the time stamp is ]" );
	});
});

