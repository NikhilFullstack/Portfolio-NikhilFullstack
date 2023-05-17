const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	number: {
		type: String,
        maxLength:15,
		required: true,
	},
	description: {
		type: String,
		required: true,
		maxLength: 200,
	},
	// role: {
	// 	type: String,
	// 	required: true,
	// },
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
