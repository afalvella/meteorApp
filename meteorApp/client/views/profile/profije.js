Template.profileTemplate.helpers({
	profile: function() {
		var userName = Session.get('user');
    	return Users.findOne({'name':userName});
  	}
});