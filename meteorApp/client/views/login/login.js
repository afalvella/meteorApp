Template.loginTemplate.users = function() {
	return Users.find({}, { sort: { name: 1 }});
};

Template.loginTemplate.events({
	'change #selectUser' : function(){
		var selectedUser = document.getElementById('selectUser').value;
        Session.set('user', selectedUser);
	}
});