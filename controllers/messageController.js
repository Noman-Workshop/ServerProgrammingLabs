const mongoose = require("mongoose");
const messageModel = require("./../models/message");
const userService = require('./../services/userService');

const getSendMessage = async (req, res) => {
	const receivers = await userService.getAllUsers();
	receivers.filter((user) => {
		if (user.username === req.user.username) {
			receivers.splice(receivers.indexOf(user), 1);
		}
	});
	res.render("sendMessage", { receivers });
}

const postSendMessage = (req, res) => {
	const data = new messageModel({
		sender: req.user._id,
		receiver: req.body.receiver,
		message: req.body.message,
	});
	console.log(data);

	data
		.save()
		.then(() => {
			console.log("Message Sent Successfully!");
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			res.redirect("/messages");
		});
}

const getMessages = async (req, res) => {
	const receivers = await userService.getAllUsers();
	receivers.filter((user) => {
		if (user.username === req.user.username) {
			receivers.splice(receivers.indexOf(user), 1);
		}
	});
	res.render("messages", { receivers });
}

const getMessagesForUser = async (req, res) => {
	let messages = [];
	let data = [];
	try {
		data = await messageModel.find();
		const sender = req.user._id.toString();
		data.forEach((message) => {
			if (message.sender == sender && message.receiver == req.params.id) {
				messages.push({ sender: sender, receiver: req.params.id, message: message.message });
			} else if (message.sender == req.params.id && message.receiver == sender) {
				messages.push({ sender: req.params.id, receiver: sender, message: message.message });
			}
		});
	} catch (error) {
		console.log(error);
	} finally {
		console.log(messages);
		return res.json(messages);
	}
}

module.exports = { getSendMessage, postSendMessage, getMessages, getMessagesForUser };