const { AuthenticationError } = require('apollo-server-core');
const { errorHandler } = require('../controllers/error.controller');

const checkIsLoggedIn = async (req, getAuthUser) => {
	try {
		// Check if user is logged in
		const authUser = await getAuthUser(req);

		console.log(authUser);

		if (!authUser) {
			throw new AuthenticationError('You are not logged in');
		}

		return authUser.role;
	} catch (error) {
		errorHandler(error);
	}
};

module.exports = { checkIsLoggedIn };
