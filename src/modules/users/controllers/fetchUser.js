const mongoose = require('mongoose');


module.exports = (ctx, next) => {
	var name = ctx.params
	let connectResult = connectDb()
	//findUser(connectResult)
	saveUser(connectResult)
	//console.log(connectResult)
	let result = {status: 200, data: {msg: 'Fetch success!!', name: name}}

	return result
}

const connectDb = () => {
	const conn = mongoose.createConnection('mongodb://localhost/koaTest', {useNewUrlParser: true});


	return conn;
}


const createSchema = () => {
	var Schema = mongoose.Schema;

	var User = new Schema({
	  name: String,
	  age: Number
	});

	return User
}

const createModel = (conn) => {
	var userModel = conn.model('users', createSchema() );

	return userModel;
}

const findUser = (conn) => {
	var userModel = createModel(conn);
	console.log('>>>>>>>>')
	// userModel.find({}, (err, result) => {

	// 	console.log(result, 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
	// })
	userModel.create({name: 'xiaoming', age: 16}, (err, result) => {
		console.log(result, 'save successed!')
	})
}

const saveUser = (conn) => {
	var UserModel = createModel(conn);
	var userModel = new UserModel({name:'testName',age: 18});
	userModel.save((err, result, rows) => {
		if(err) {
			console.log(err)
		}
		console.log(result)
		console.log(rows)
	})
}