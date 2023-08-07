import { Upload } from '@aws-sdk/lib-storage';
import { bucket, client } from './bucket.js';
import { Stream } from 'stream';

export const createUploadStream = async (Key, path) => {
	const Body = new Stream.PassThrough();
	const uploadParams = {
		Bucket: bucket + '/' + path,
		Key,
		Body,
		// ContentLength: Body.readableLength,
	};
	const upload = new Upload({
		client,
		params: uploadParams,
	});
	upload.on('httpUploadProgress', (progress) => console.log(progress));

	// await upload.done();
	return {
		writeStream: Body,
		promise: upload.done(),
	};
};
