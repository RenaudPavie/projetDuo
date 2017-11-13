
var user;
var userText;

$.ajax({
	url : 'http://messenger.api.niamor.com/createUser',
	method : 'get',
}).done(function(newUser) {
	console.log(newUser);
	user = newUser;
});

$.ajax({
	url : 'http://messenger.api.niamor.com/getUsers',
	method : 'get',
}).done(function(getUser){
	console.log(getUser)
});

function envoyerMessage() {
	userText = $('#chatText').val();
	$.ajax({
	url : 'http://messenger.api.niamor.com/sendMessage',
	method : 'post',
	data: {
		authkey: user.authKey,
		text: userText,
		to: 0,
	}
	});
}

$('#sendIt').click(function() {
	$.ajax({
		url : 'http://messenger.api.niamor.com/getMessages',

	}).done(function(msg) {
		for (i = 0; i < msg.length: ; i--) {
			$().append('<p></p>')
		}
	})
})

