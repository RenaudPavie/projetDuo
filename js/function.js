
var user;
var userText;
var lesId = 0;
var allUser;


$.ajax({
	url : 'http://messenger.api.niamor.com/createUser',
	method : 'get',
}).done(function(newUser) {

	user = newUser;
});

$.ajax({
	url : 'http://messenger.api.niamor.com/getUsers',
	method : 'get',
}).done(function(getUser){
	
	allUser = getUser;
	for (i = 0; i < allUser.length; i++) {
		document.getElementById('afficherUser').innerHTML += '<li>'+ allUser[i].username +'</li>';
	}
});

function envoyerMessage() {
	userText = $('#chatText').val();
	$('#chatText').val('');
	$.ajax({
		url : 'http://messenger.api.niamor.com/sendMessage',
		method : 'post',
		data: {
			authKey: user.authKey,
			
			text: userText,
			to: 0

		}
	});

};

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
			document.getElementById('myText').innerHTML += '<p>'+ msg[i].from.username +'<br>'+ msg[i].text+'</p>';
			console.log(msg[i].text);
			if (i==msg.length-1) {
				lesId = msg[i].id;
			}
		}
	});
}, 1000);

function keypress(){
	if (event.keyCode ==13){
		envoyerMessage();
	}
}
$( ".row" ).scrollTop(5000);