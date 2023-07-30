import { transporter } from '../config/smtp/SMTPtransporter.js';
const sender = async (_, { mail_address, subject, message, contentHTML }) => {
	const options = {
		from: '"Monkey" <m.angel091190@gmail.com>',
		to: mail_address,
		subject,
	};

	if (contentHTML) options.html = message;
	else options.text = message;

	const info = await transporter.sendMail(options);

	return 'Message sent: %s', info.messageId;
};

const mailerController = { sender };

export default mailerController;
