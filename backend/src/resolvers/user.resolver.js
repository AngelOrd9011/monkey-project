const { authController } = require('../controllers/auth.controller');
const { userController } = require('../controllers/user.controller');

const usersResolvers = {
	Query: {
		// Users
		getMe: userController.getMe,
		// Auth
		refreshAccessToken: authController.refreshAccessToken,
		logoutUser: authController.logoutHandler,
	},
	Mutation: {
		// Auth
		signupUser: authController.signup,
		loginUser: authController.login,
	},
};

module.exports = {
	usersResolvers,
};
