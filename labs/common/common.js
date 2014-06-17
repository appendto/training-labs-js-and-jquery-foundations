/*global amplify: false, lesson: false, template: false */

(function ( $, lesson ) {

lesson.data = {

	tweets : [
		{ id: 1, userName: "appendTo", fullName: "", timeStamp: "1322631934000", text: "This is a test of the emergency broadcast system", status: "normal" },
		{ id: 1, userName: "dougneiner", fullName: "", timeStamp: "1322631934000", text: "Hello? 1, 2, 3. Is @anybody home? http://127.0.0.1", status: "normal" },
		{ id: 1, userName: "eliperelman", fullName: "", timeStamp: "1322631934000", text: "Now sit right back and you'll hear a tale...", status: "promoted" },
		{ id: 1, userName: "mikehostetler", fullName: "", timeStamp: "1322631934000", text: "What is huge and #international? http://appendto.com", status: "promoted" },
		{ id: 1, userName: "redwolves", fullName: "", timeStamp: "1322631934000", text: "I think I should move to $Iowa, where the @potatoes grow", status: "normal" }
	],

	tweetFormat :  '<li class="tweet {status}-tweet" data-user-name="{userName}"><div class="image"><img height="48" width="48" src="http://twitter.com/api/users/profile_image?screen_name={userName}" alt="" /></div><div class="content"><div class="user"><a class="user-name" href="http://twitter.com/{userName}" title="{userName}">{userName}</a><div class="full-name">{fullName}</div></div><div class="text">{text}</div><div class="time-stamp" data-time="1322631934000">{timeStamp}</div></div></li>',

	profileImageTemplate : "https://api.twitter.com/1/users/profile_image?screen_name={userName}&amp;size=original", //bigger",

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
