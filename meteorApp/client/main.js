var userName = Session.get('user');
Deps.autorun(function () {
  Meteor.subscribe('messages', { $or: [ {'author':userName}, {'recipient':userName} ] });
});
//Meteor.subscribe('messages', { $or: [ {'author':userName}, {'recipient':userName} ] });
Meteor.subscribe('users');