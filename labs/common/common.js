/*global amplify: false, lesson: false, template: false */

(function ( $, lesson ) {

lesson.data = {

	tweets : [
		{ id: 1, userName: "appendTo", fullName: "appendTo", timeStamp: "1408911289000", text: "Take a peek at some of the #webdevelopment tools we use here at appendTo! http://buff.ly/1lfXCmP  @aaronbushnell", status: "normal" },
		{ id: 2, userName: "jcreamer898", fullName: "Jonathan Creamer", timeStamp: "1408912492000", text: "Slides and code from my #mwconf talk \"Don't forget to cover your client side\" http://jcre.am/1okkIId  +@modernwebconf +@appendTo", status: "normal" },
		{ id: 3, userName: "jakerella", fullName: "Jordan Kasper", timeStamp: "1408913113000", text: "WHO LEAVES THREE QUARTERS OF A BASKET OF NACHOS JUST SITTING THERE?!?! Savages.", status: "promoted" },
		{ id: 4, userName: "johnkellar", fullName: "John Kellar", timeStamp: "1408913119000", text: "Prepping for #devlink this weekend, always fun to load up on prizes at Best Buy!", status: "promoted" },
		{ id: 5, userName: "redwolves", fullName: "Ralph Whitbeck", timeStamp: "1408913419000", text: "I can’t say how much I appreciate everyone @appendto. Bring your next web project to us and see how great they are. http://bit.ly/3TyUFS", status: "normal" }
	],

	tweetFormat :  '<li class="tweet {status}-tweet" data-user-name="{userName}"><div class="image"><img height="48" width="48" src="http://twitter.com/api/users/profile_image?screen_name={userName}" alt="" /></div><div class="content"><div class="user"><a class="user-name" href="http://twitter.com/{userName}" title="{userName}">{userName}</a><div class="full-name">{fullName}</div></div><div class="text">{text}</div><div class="time-stamp" data-time="1322631934000">{timeStamp}</div></div></li>',

	profileImageTemplate : "https://pbs.twimg.com/profile_images/497536789251244032/mC6n_Y8E.jpeg", //bigger",

	profileLinkTemplate: "<a href='http://twitter.com/{userName}'>@{userName}</a>"
};

lesson.helpers = {

	//http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/
	template : function( s, d ) {
		for( var p in d )
			s = s.replace( new RegExp( "{" + p + '}' , "g" ), d[ p ] );
		return s;
	}

};

$.mockjax({
	url: "https://api.twitter.com/statuses/home_timeline",
	dataType: "json",
	response: function( settings ) {
		amplify.publish( "mockjax.request", settings );
		this.responseText = lesson.data.tweets;
	}
});

$.mockjax({
	url: "https://api.twitter.com/1/statuses/update.format",
	dataType: "json",
	response: function( settings ) {
		amplify.publish( "mockjax.request", settings );
		this.responseText = lesson.data.tweets[ 0 ];
	}
});

}( jQuery, window.lesson = window.lesson || {} ));
