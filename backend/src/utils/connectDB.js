import { connect, set } from 'mongoose';

const connectDB = () => {
	try {
		set('strictQuery', true);
		connect(process.env.MONGODB_URI, {
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
