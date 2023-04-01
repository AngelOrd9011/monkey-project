import { AuthenticationError } from 'apollo-server-core';
import errorHandler from '../controllers/error.controller.js';

const checkIsLoggedIn = async (req, getAuthUser) => {
	try {
		// Check if user is logged in
		const authUser = await getAuthUser(req);

		if (!authUser) {
			throw new AuthenticationError('You are not logged in');
		}

		return authUser.role;
	} catch (error) {
		errorHandler(error);
	}
};

export default checkIsLoggedIn;
