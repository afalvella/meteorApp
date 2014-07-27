Users = new Meteor.Collection('users');

var Schemas = {};

Schemas.User = new SimpleSchema({
    _id: {
      type: String,
      label: 'User id'
    },
    name: {
      type: String, 
      label: 'User name',
      max: 200 
    },
    phone: {
      type: String, 
      label: 'Users phone number',
      max: 20
    },
    contacts: {
      type: [String],
      label: 'Contacts of the user',
      optional: true
  	}
});

Users.attachSchema(Schemas.User);
