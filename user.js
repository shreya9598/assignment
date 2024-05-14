var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    password: {
		type: String,
		required: true,
	},
	profile: {
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		bio: {
			type: String,
			default: "",
		},
		photo: {
			type: String,
			default: "",
		},
	},
	role: {
		type: String,
		enum: ["ADMIN", "USER"]
	},
	isPublic: {
		type: Boolean,
		default: false,
	}
});

var user = new mongoose.model('User', schema);
module.exports = user;