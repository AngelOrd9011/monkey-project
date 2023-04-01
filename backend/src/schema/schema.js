import { gql } from 'apollo-server-express';
import productsTypeDefs from './products.types.js';
import userTypeDefs from './user.types.js';

const rootTypeDefs = gql`
	scalar DateTime
	scalar Upload

	input UploadInput {
		file: Upload!
		path: String!
	}

	type UploadResponse {
		ETag: String!
		Location: String!
		key: String!
		Key: String!
		Bucket: String!
	}

	type Query {
		_: String
	}

	type Mutation {
		_: String
	}
`;

const typeDefs = [rootTypeDefs, productsTypeDefs, userTypeDefs];

export default typeDefs;
