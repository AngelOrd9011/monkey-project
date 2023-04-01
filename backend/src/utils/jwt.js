import jwtPkg from 'jsonwebtoken';
const { sign, verify } = jwtPkg;
import errorHandler from '../controllers/error.controller.js';

export const signJwt = (payload, Key, options) => {
	const privateKey = Buffer.from(Key, 'base64').toString('ascii');
	return sign(payload, privateKey, {
		...(options && options),
		algorithm: 'RS256',
		allowInsecureKeySizes: true,
	});
};

export const verifyJwt = (token, Key) => {
	try {
		const publicKey = Buffer.from(Key, 'base64').toString('ascii');
		const decoded = verify(token, publicKey);
		return decoded;
	} catch (error) {
		errorHandler(error);
	}
};
