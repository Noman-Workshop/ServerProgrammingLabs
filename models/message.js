const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	sender: {
		required: true,
		type: String,
	},
	receiver: {
		required: true,
		type: String,
	},
	message: {
		required: true,
		type: String,
	},
}, { timestamps: true });

module.exports = mongoose.model("Message", schema);
