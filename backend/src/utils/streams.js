import stream from 'stream';

import { bucket, s3 } from './bucket.js';

export const createUploadStream = (key, path) => {
	const pass = new stream.PassThrough();
	return {
		writeStream: pass,
		promise: s3
			.upload({
				Bucket: bucket + '/' + path,
				Key: key,
				Body: pass,
			})
			.promise(),
	};
};
