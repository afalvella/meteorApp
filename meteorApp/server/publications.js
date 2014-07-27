Meteor.publish("messages", function() {
	return Messages.find();
});

Meteor.publish("users", function() {
	/* should not send all the users but to make the login easier 
		I publish all the users. */
	return Users.find(); 
});
