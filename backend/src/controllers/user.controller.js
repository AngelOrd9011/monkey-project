import errorHandler from './error.controller.js';
import checkIsLoggedIn from '../middleware/checkIsLoggedIn.js';

const getMe = async (_, args, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);

		const user = await authUser(req);

		return {
			status: 'success',
			user,
		};
	} catch (error) {
		errorHandler(error);
	}
};

const fileUpload = async (file, path) => {
	const { filename, createReadStream } = await file;

	const stream = createReadStream();

	let result;

	try {
		const uploadStream = createUploadStream({ filename, path });
		stream.pipe(uploadStream.writeStream);
		result = await uploadStream.promise;
	} catch (error) {
		console.log(`[Error]: Message: ${error.message}, Stack: ${error.stack}`);
		throw new ApolloError('Error uploading file');
	}

	return result;
};

const updateUser = async (_, { input }, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);
		const { name, email, password, passwordConfirm, photo } = input;

		const uploaded = await fileUpload(input.upload);
		const user = await Product.findByIdAndUpdate(
			id,
			{
				$set: {
					name,
					email,
					password,
					passwordConfirm,
					photo,
				},
			},
			{
				new: true,
			}
		);
		return {
			status: 'success',
			user,
			uploaded,
		};
	} catch (error) {
		errorHandler(error);
	}
};

const userController = { getMe, updateUser };

export default userController;
