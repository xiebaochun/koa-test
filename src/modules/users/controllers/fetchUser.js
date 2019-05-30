const mongoose = require('mongoose');
const userModel = require('../models/user');

module.exports = async (ctx, next) => {
	var userId = ctx.params.id
	connectDb()
	//findUser(connectResult)

	let userData = await userModel.findUserById(userId)
	//let result = await connectDb()
	
	console.log(userData)
	// findUserById(userId, (userData) => {
	let result = {status: 200, data: {msg: 'Fetch success!!', user: userData}}
	ctx.type = 'json'
	ctx.body = result
	// 	//ctx.render('pages/index', {user: 'username'})
	// 	console.log(result, 'from controller')
	// 	console.log(ctx, 'from controller')
	// })
	
}

const connectDb = () => {
	const conn = mongoose.connect('mongodb://localhost/koaTest', {useNewUrlParser: true});
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