const { errorHandler } = require('./error.controller');
const { checkIsLoggedIn } = require('../middleware/checkIsLoggedIn');

const getMe = async (_, args, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);

		const user = await authUser(req);

		return {
			status: 'success',
			user,
		};
	} catch (error) {
		errorHandler(error);
	}
};

const userController = { getMe };

module.exports = { userController };
