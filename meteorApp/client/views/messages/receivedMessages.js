Template.receivedMessagesTemplate.messages = function() {
	var userName = Session.get('user');
	return Messages.find({recipient:userName}, { sort: { time: 1 }});
}