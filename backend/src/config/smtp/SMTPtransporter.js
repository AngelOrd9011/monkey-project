import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';

dotenv.config();

const smtpOptions = {
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
};

export const transporter = createTransport(smtpOptions);
