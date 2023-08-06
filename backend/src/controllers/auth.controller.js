import { AuthenticationError, ForbiddenError } from 'apollo-server-core';
import checkIsLoggedIn from '../middleware/checkIsLoggedIn.js';
import User from '../models/User.js';
import redisClient from '../config/database/connectRedis.js';
import { signJwt, verifyJwt } from '../utils/jwt.js';
import errorHandler from './error.controller.js';
import { checkSession } from '../middleware/authUser.js';

const accessTokenExpireIn = 20;
const refreshTokenExpireIn = 60;

const cookieOptions = {
	httpOnly: false,
	// domain: 'localhost',
	sameSite: 'none',
	secure: true,
};

const accessTokenCookieOptions = {
	...cookieOptions,
	maxAge: accessTokenExpireIn * 60 * 1000,
	expires: new Date(Date.now() + accessTokenExpireIn * 60 * 1000),
};

const refreshTokenCookieOptions = {
	...cookieOptions,
	maxAge: refreshTokenExpireIn * 60 * 1000,
	expires: new Date(Date.now() + refreshTokenExpireIn * 60 * 1000),
};

if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

const signup = async (_, { input: { name, email, password, passwordConfirm } }, { req }) => {
	try {
		const user = await User.create({
			name,
			email,
			password,
			passwordConfirm,
		});
		return {
			status: 'success',
			user,
		};
	} catch (error) {
		if (error.code === 11000) {
			throw new ForbiddenError('El usuario ya existe');
		}
		errorHandler(error);
	}
};

async function signTokens(user) {
	// Create a Session
	await redisClient.set(user.id, JSON.stringify(user), {
		EX: 60 * 60,
	});

	// Create access token
	const access_token = signJwt({ user: user.id }, process.env.JWT_ACCESS_PRIVATE_KEY, {
		expiresIn: `${accessTokenExpireIn}m`,
	});

	// Create refresh token
	const refresh_token = signJwt({ user: user.id }, process.env.JWT_ACCESS_PRIVATE_KEY, {
		expiresIn: `${refreshTokenExpireIn}m`,
	});

	return { access_token, refresh_token };
}

const login = async (_, { input: { email, password } }, { req, res }) => {
	try {
		// Check if user exist and password is correct
		const user = await User.findOne({ email }).select('+password +verified');

		if (!user || !(await user.comparePasswords(password, user.password))) {
			throw new AuthenticationError('Correo y/o contraseña inválidos');
		}

		user.password = undefined;

		// Create a session and tokens
		const { access_token, refresh_token } = await signTokens(user);

		// Add refreshToken to cookie
		res.cookie('refresh_token', refresh_token, refreshTokenCookieOptions);
		res.cookie('access_token', access_token, accessTokenCookieOptions);
		res.cookie('logged_in', true, {
			...accessTokenCookieOptions,
			httpOnly: false,
		});

		return {
			status: 'success',
			access_token,
		};
	} catch (error) {
		errorHandler(error);
	}
};

const refreshAccessToken = async (_, args, { req, res }) => {
	try {
		// Get the refresh token
		let refresh_token = req.headers.cookie.split('=')[1].split(';')[0];

		// Validate the RefreshToken
		const decoded = verifyJwt(refresh_token, process.env.JWT_ACCESS_PUBLIC_KEY);

		if (!decoded) {
			throw new ForbiddenError('Could not refresh access token');
		}

		// Check if user's session is valid
		const session = await redisClient.get(decoded.user);

		if (!session) {
			throw new ForbiddenError('User session has expired');
		}

		// Check if user exist and is verified
		const user = await User.findById(JSON.parse(session)._id).select('+verified');

		if (!user || !user.verified) {
			throw new ForbiddenError('Could not refresh access token');
		}

		// Sign new access token
		const access_token = signJwt({ user: user._id }, process.env.JWT_ACCESS_PRIVATE_KEY, {
			expiresIn: `${accessTokenExpireIn}m`,
		});

		// Send access token cookie
		res.cookie('access_token', access_token, accessTokenCookieOptions);
		res.cookie('logged_in', 'true', {
			...accessTokenCookieOptions,
			httpOnly: false,
		});

		return {
			status: 'success',
			access_token,
		};
	} catch (error) {
		errorHandler(error);
	}
};

const logoutHandler = async (_, args, { req, res, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);

		const user = await authUser(req);

		// Delete the user's session
		await redisClient.del(user.id);

		// Logout user
		res.cookie('access_token', '', { maxAge: -1 });
		res.cookie('refresh_token', '', { maxAge: -1 });
		res.cookie('logged_in', '', { maxAge: -1 });

		return true;
	} catch (error) {
		errorHandler(error);
	}
};

const verify = async (_, { token }) => {
	const session = await checkSession(token);
	let email = JSON.parse(session).email;
	const user = await User.findOneAndUpdate(
		{ email },
		{
			$set: {
				verified: true,
			},
		},
		{
			new: true,
		}
	);
	return {
		status: 'success',
		user,
	};
};

const authController = {
	signup,
	login,
	refreshAccessToken,
	logoutHandler,
	verify,
};

export default authController;
