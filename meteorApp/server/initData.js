//Insert some sample data when the DB is empty
if (Messages.find().count() === 0) { 
	Messages.insert({
		_id: 'm1',
		title: 'Hello',
		body: 'Hello world !',
		author: 'Tom',
		recipient: 'Jane'
	});
	Messages.insert({
		_id: 'm2',
		title: 'Happy birthday!',
		body: 'Hello Jane, I wish that you spent a great day, happy birthday !',
		author: 'Tom',
		recipient: 'Jane'
	});
	Messages.insert({
		_id: 'm3',
		title: 'Re: Happy birthday!',
		body: 'Hi Tom, thank you very much !',
		author: 'Jane',
		recipient: 'Tom'
	});
};

if (Users.find().count() === 0) { 
	Users.insert({
		_id: 'u1',
		name: 'Tom',
		phone: '1155556666'
	});
	Users.insert({
		_id: 'u2',
		name: 'Jane',
		phone: '1122223333'
	});
}