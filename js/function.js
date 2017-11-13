
var user;
var userText;
var lesId;

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
		authKey: user.authKey,
		text: userText,
		to: 0
	}
	});
}

$('#sendIt').click(function() {
	$.ajax({
		url : 'http://messenger.api.niamor.com/getMessages',
		method : 'post',
		data : {
			authKey : user.authKey,
			lastId : 0,
		}

	}).done(function(msg) {
		for (i = 0; i < msg.length ; i++) {
			$('monDiv').append('<p>'+msg[i].text+'</p>')
			console.log(msg[i].text);
		}
	})
})

