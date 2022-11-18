const UserModel = require('../models/userDetails');

const getAllUsers = async () => {
		return await UserModel.find();
}

module.exports = { getAllUsers };
