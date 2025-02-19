import { ForbiddenError } from 'apollo-server-core';
import errorHandler from '../controllers/error.controller.js';
import User from '../models/User.js';
import redisClient from '../config/database/connectRedis.js';
import { verifyJwt } from '../utils/jwt.js';
import { ADMIN_ROLE } from '../utils/constants.js';

export const checkAdminRole = async (role) => {
	if (role !== ADMIN_ROLE) {
		let error = { name: 'InvalidRole' };
		errorHandler(error);
	}
};

export const getAccessToken = (req) => {
	// Get the access token
	let access_token = null;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		access_token = req.headers.authorization.split(' ')[1];
	} else if (req?.cookies?.access_token) {
		const { access_token: token } = req.cookies;
		access_token = token;
	}
	return access_token;
};

export const checkSession = async (access_token) => {
	// Validate the Access token
	const decoded = verifyJwt(access_token, process.env.JWT_ACCESS_PUBLIC_KEY);

	if (!decoded) return false;

	// Check if the session is valid
	const session = await redisClient.get(decoded.user);

	if (!session) {
		throw new ForbiddenError('La sesión ha expirado');
	}

	return session;
};

const authUser = async (req) => {
	try {
		let access_token = await getAccessToken(req);
		if (!access_token) return false;
		let session = await checkSession(access_token);
		// Check if user exist
		const user = await User.findById(JSON.parse(session).id).select('+verified');
		if (!user) {
			throw new ForbiddenError('No existe un inicio de sesión activo para el usuario con este token');
		}
		return user;
	} catch (error) {
		errorHandler(error);
	}
};

export default authUser;
