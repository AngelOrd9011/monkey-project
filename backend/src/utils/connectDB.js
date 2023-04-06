import { connect, set } from 'mongoose';

const connectDB = async () => {
	try {
		set('strictQuery', true);
		await connect(process.env.MONGODB_URI, {
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 60000,
		});
		console.log('Mongodb connected');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

export default connectDB;
