import AWS from 'aws-sdk';
import dotenv from 'dotenv';
// import { S3 } from '@aws-sdk/client-s3';

dotenv.config();
export const bucket = 'monkey';

export const s3 = new AWS.S3({
	endpoint: process.env.MINIO_API,
	accessKeyId: process.env.MINIO_ADMIN,
	secretAccessKey: process.env.MINIO_PASSWORD,
	sslEnabled: false,
	s3ForcePathStyle: true,
});

// export const client = new S3({
// 	endpoint: process.env.MINIO_API,
// 	accessKeyId: process.env.MINIO_ADMIN,
// 	secretAccessKey: process.env.MINIO_PASSWORD,

// 	sslEnabled: false,
// 	s3ForcePathStyle: true,
// });
