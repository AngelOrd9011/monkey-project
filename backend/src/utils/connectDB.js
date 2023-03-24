const { connect, set } = require('mongoose');

const connectDB = async () => {
	try {
		set('strictQuery', true);
		await connect(process.env.MONGODB_URI || 'mongodb://monkeyadmin:password@localhost:27017/monkey', {
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 60000,
		});
		console.log('Mongodb connected');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = { connectDB };
