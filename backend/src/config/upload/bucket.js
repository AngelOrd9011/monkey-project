import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();
export const bucket = 'monkey';

export const s3 = new AWS.S3({
	endpoint: process.env.MINIO_URI,
	accessKeyId: process.env.MINIO_USER,
	secretAccessKey: process.env.MINIO_PASSWORD,
	sslEnabled: false,
	s3ForcePathStyle: true,
});

// import { S3 } from '@aws-sdk/client-s3';

// export const bucket = 'monkey';

// export const s3 = new S3({
// endpoint: process.env.MINIO_URI,
// accessKeyId: process.env.MINIO_USER,
// secretAccessKey: process.env.MINIO_PASSWORD,
// 	sslEnabled: false,
// 	s3ForcePathStyle: true,
// });