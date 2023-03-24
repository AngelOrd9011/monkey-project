const { gql } = require('apollo-server-express');
const { productsTypeDefs } = require('./products.types');
const { userTypeDefs } = require('./user.types');

const rootTypeDefs = gql`
	scalar DateTime

	type Query {
		_: String
	}

	type Mutation {
		_: String
	}
`;

const typeDefs = [rootTypeDefs, productsTypeDefs, userTypeDefs];

module.exports = { typeDefs };
