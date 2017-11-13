
var user;
var userText;
var lesId = 0;


$.ajax({
	url : 'http://messenger.api.niamor.com/createUser',
	method : 'get',
}).done(function(newUser) {
	// console.log(newUser);
	user = newUser;
});

$.ajax({
	url : 'http://messenger.api.niamor.com/getUsers',
	method : 'get',
}).done(function(getUser){
	// console.log(getUser)
});

function envoyerMessage() {
	document.getElementById('chatText').value = '';
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


setInterval(function() {
	$.ajax({
		url : 'http://messenger.api.niamor.com/getMessages',
		method : 'post',
		data : {
			authKey : user.authKey,
			lastId : lesId,
		}
	}).done(function(msg) {
		for (i = 0; i < msg.length ; i++) {
			document.getElementById('myText').innerHTML += '<p>'+ user.authKey +'<br>'+ msg[i].text+'</p>';
			console.log(msg[i].text);
			if (i==msg.length-1) {
				lesId = msg[i].id;
			}
		}
	});
}, 1000);

