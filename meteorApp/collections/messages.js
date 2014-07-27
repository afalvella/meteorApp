Messages = new Meteor.Collection('messages');

var Schemas = {};

Schemas.Message = new SimpleSchema({
    _id: {
      type: String,
      label: 'Message id'
    },
    title: {
      type: String, 
      label: 'Message title',
      max: 100 
    },
    body: {
      type: String, 
      label: 'Message body',
      max: 500
    },
    author: {
      type: String,
      label: 'User that write the message'
  	}, 
    recipient: {
      type: String,
      label: 'User that receive the message' 	
    }
});

Messages.attachSchema(Schemas.Message);


