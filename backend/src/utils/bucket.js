import AWS from 'aws-sdk';

export const bucket = 'monkey';

export const s3 = new AWS.S3({
	endpoint: 'http://localhost:9000',
	accessKeyId: 'admin',
	secretAccessKey: 'password',
	sslEnabled: false,
	s3ForcePathStyle: true,
});
