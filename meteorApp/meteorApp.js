/*
if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteorApp.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.writeMessagesTemplate.events({
    'click input': function () {
      console.log("You pressed the button send");
      sendMessageFunction(); 
    }
  });

  var sendMessageFunction = function() {
    var title = document.getElementById('messageTitle');
    var body = document.getElementById('messageBody');
    //var user = Session.get('userId');

    if(title.value != '' && body.value != ''){
      Messages.insert({
        title: title.value,
        body: body.value,
        //userId: user,
        date: Date.now()
      });

      title.value = ''; 
      body.value = '';
    }
  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/