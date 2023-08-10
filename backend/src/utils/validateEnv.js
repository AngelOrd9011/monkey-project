import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
	cleanEnv(process.env, {
		NODE_ENV: str(),
		PORT: port(),

		MONGODB_URI: str(),
		REDIS_URL: str(),

		JWT_ACCESS_PRIVATE_KEY: str(),
		JWT_ACCESS_PUBLIC_KEY: str(),

		JWT_ACCESS_PRIVATE_KEY: str(),
		JWT_ACCESS_PUBLIC_KEY: str(),

		MINIO_URI: str(),
		MINIO_ADMIN: str(),
		MINIO_PASSWORD: str(),

		SMTP_USER: str(),
		SMTP_PASSWORD: str(),

		FRONTEND_URL: str(),
	});
};

export default validateEnv;
