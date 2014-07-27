Template.sentMessagesTemplate.messages = function() {
	var userName = Session.get('user');
	return Messages.find({author:userName}, { sort: { time: 1 }});
}