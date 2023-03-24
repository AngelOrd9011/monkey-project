const jwt = require('jsonwebtoken');
const { errorHandler } = require('../controllers/error.controller');

const signJwt = (payload, Key, options) => {
	const privateKey = Buffer.from(Key, 'base64').toString('ascii');
	return jwt.sign(payload, privateKey, {
		...(options && options),
		algorithm: 'RS256',
		allowInsecureKeySizes: true,
	});
};

const verifyJwt = (token, Key) => {
	try {
		const publicKey = Buffer.from(Key, 'base64').toString('ascii');
		const decoded = jwt.verify(token, publicKey);
		return decoded;
	} catch (error) {
		errorHandler(error);
	}
};

module.exports = { signJwt, verifyJwt };
