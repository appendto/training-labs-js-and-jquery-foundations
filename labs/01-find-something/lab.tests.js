module( "Selectors", {
	setup: function() {

	},
	teardown: function() {

	}
});

test( "Exercise 1", function() {
	var actual = lesson.selectors.exercise_1(),
		expected = $( "header" );

	expect( 3 );
	equals( actual.length, 1, "Only one element was returned in the selection" );
	equals( actual.length, expected.length, "Length of selections are the same" );
	deepEqual( actual[ 0 ], expected[ 0 ], "Deep comparions of selections are the same" );
});

test( "Exercise 2", function() {
	var actual = lesson.selectors.exercise_2(),
		expected = $( "#tweets .tweet:first" );

	expect( 3 );
	equals( actual.length, 1, "Only one element was returned in the selection" );
	equals( actual.length, expected.length, "Length of selections are the same" );
	deepEqual( actual[ 0 ], expected[ 0 ], "Deep comparions of selections are the same" );
});

test( "Exercise 3", function() {
	var actual = lesson.selectors.exercise_3(),
		expected = $( "#tweets .tweet:last" );

	expect( 3 );
	equals( actual.length, 1, "Only one element was returned in the selection" );
	equals( actual.length, expected.length, "Length of selections are the same" );
	deepEqual( actual[ 0 ], expected[ 0 ], "Deep comparions of selections are the same" );
});

test( "Exercise 4", function() {
	var actual = lesson.selectors.exercise_4(),
		expected = $( "#tweets" ).find( ".tweet:first, .tweet:last" );

	expect( 3 );
	equals( actual.length, 2, "Only two elements were returned in the selection" );
	equals( actual.length, expected.length, "Length of selections are the same" );
	deepEqual( actual.get(), expected.get(), "Deep comparions of selections are the same" );
});

test( "Exercise 5", function() {
	var actual = lesson.selectors.exercise_5(),
		expected = $( ".tweet[data-user-name='dougneiner']" );

	expect( 3 );
	equals( actual.length, 1, "Only one element was returned in the selection" );
	equals( actual.length, expected.length, "Length of selections are the same" );
	deepEqual( actual[ 0 ], expected[ 0 ], "Deep comparions of selections are the same" );
});

test( "Exercise 6", function() {
	var actual = lesson.selectors.exercise_6(),
		expected = $( ".tweet[data-user-name$='r']" );

	expect( 3 );
	equals( actual.length, 1, "Only one element was returned in the selection" );
	equals( actual.length, expected.length, "Length of selections are the same" );
	deepEqual( actual.get(), expected.get(), "Deep comparions of selections are the same" );
});
