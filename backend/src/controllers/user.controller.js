import errorHandler from './error.controller.js';
import checkIsLoggedIn from '../middleware/checkIsLoggedIn.js';
import { createUploadStream } from '../config/upload/streams.js';
import User from '../models/User.js';
import mailerController from './mailer.controller.js';
import { getAccessToken } from '../middleware/authUser.js';

const getMe = async (_, args, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);

		const user = await authUser(req);

		if (!user.verified) {
			let access_token = getAccessToken(req);
			let message = `<h2>¡Bienvenido!</h2>
			<p>Para verificar tu usuario, ingresa al siguiente enlace:</p>
			<a href='http://localhost:3000/${access_token}'>Verifica tu usuario AQUÍ</a>`;
			let subject = 'Verificación de usuario';
			let mail_address = user.email;
			mailerController.sender(null, { mail_address, subject, message, contentHTML: true });
			return {
				status: 'not-verified',
			};
		}

		return {
			status: 'success',
			user,
		};
	} catch (error) {
		errorHandler(error);
	}
};

const fileUpload = async ({ file, path }) => {
	const { filename, createReadStream } = await file;
	const stream = createReadStream();

	let result;

	try {
		const uploadStream = createUploadStream(filename, path);
		stream.pipe(uploadStream.writeStream);
		result = await uploadStream.promise;
	} catch (error) {
		console.log(`[Error]: Message: ${error.message}, Stack: ${error.stack}`);
		throw new ApolloError('Error uploading file');
	}

	return result;
};

const updateUser = async (_, { email, input }, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);
		const { name, photo } = input;

		let uploaded;
		if (input.upload) await fileUpload(input.upload);

		const user = await User.findOneAndUpdate(
			{ email },
			{
				$set: {
					name,
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
