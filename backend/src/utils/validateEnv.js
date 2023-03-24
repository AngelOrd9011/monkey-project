const { cleanEnv, port, str } = require('envalid');

const validateEnv = () => {
	cleanEnv(process.env, {
		NODE_ENV: str(),
		PORT: port(),

		JWT_ACCESS_PRIVATE_KEY: str(),
		JWT_ACCESS_PUBLIC_KEY: str(),

		JWT_REFRESH_PRIVATE_KEY: str(),
		JWT_REFRESH_PUBLIC_KEY: str(),
	});
};

module.exports = { validateEnv };
