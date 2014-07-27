Template.writeMessagesTemplate.events({
	'click input': function () {
		sendMessageFunction(); 
	}
});

var sendMessageFunction = function() {
    var title = document.getElementById('messageTitle');
    var body = document.getElementById('messageBody');
    var recipient = document.getElementById('recipient');
    var author = Session.get('user');

    if(title.value != '' && body.value != ''){
      Messages.insert({
        _id: Meteor.uuid(), 
        title: title.value,
        body: body.value,
        author: author,
        recipient: recipient.value
      });

      title.value = ''; 
      body.value = '';
      recipient.value = ''; 
      alert('Message sent');
    }
};