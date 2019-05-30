const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	id: Number,
	name: String,
	age: Number
})


module.exports = userSchema