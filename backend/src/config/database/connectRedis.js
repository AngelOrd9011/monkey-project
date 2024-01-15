import { createClient } from 'redis';

const redisUrl = process.env.REDIS_URL;
const pwd = process.env.REDIS_PASSWORD;

const redisClient = createClient({
	url: redisUrl,
	password: pwd,
});

const connectRedis = async () => {
	try {
		await redisClient.connect();
	} catch (error) {
		console.error(error.message);
		setInterval(9000, connectRedis);
	}
};

connectRedis();

redisClient.on('connect', () => console.log('Redis client connected successfully'));

redisClient.on('error', (err) => console.error(err));

export default redisClient;
