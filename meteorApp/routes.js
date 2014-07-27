Router.map(function(){
	this.route('homeTemplate', { path:'/' }),
	this.route('loginTemplate', { path:'/login' }),
	this.route('homeTemplate', { path:'/home' }),
	this.route('profileTemplate', { path:'/profile'}),
	this.route('sentMessagesTemplate', { path: '/sent'}),
	this.route('receivedMessagesTemplate', { path: '/received'}),
	this.route('writeMessagesTemplate', { path:'/write'})
	this.route('notFoundTemplate', { path: '*'})
});