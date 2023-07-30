import authController from '../controllers/auth.controller.js';
import userController from '../controllers/user.controller.js';

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
		verifyUser: authController.verify,
		//Users
		updateUser: userController.updateUser,
	},
};

export default usersResolvers;
