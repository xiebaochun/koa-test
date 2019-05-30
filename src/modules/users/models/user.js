const mongoose = require('mongoose')
const userSchema = require('./schema')

var userModel = mongoose.model('users', userSchema);

userModel.findUserById = (userId) => {
	return new Promise((resolve) => {
		userModel.find({id: userId}, (err, result) => {
			console.log(result, 'find successed!')
			if(err) {resolve(err)}
			resolve(result)
		})
	});
}


module.exports = userModel